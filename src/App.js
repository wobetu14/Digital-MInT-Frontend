import { BrowserRouter, Link, Outlet, Route, Routes  } from 'react-router-dom';
import './App.css';
import AppInfos from './Components/App_Repo/AppInfos';
import CorporateNotices from './Components/CorporateNotices/CorporateNotices';
import AppHeader from './Components/AppHeader/AppHeader';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import LatestNotices from './Components/LatestNotices/LatestNotices';
import AddressBooks from './Components/AddressBook/AddressBooks';
import CreateNewAppInfo from './Components/App_Repo/CreateNewAppInfo';
import DownloadableFiles from './Components/DownloadableFiles/DownloadableFiles';
import CreateNewNotice from './Components/CorporateNotices/CreateNewNotice';
import CreateNewDownloadables from './Components/DownloadableFiles/CreateNewDownloadables';
import CreateNewInfograficMessage from './Components/LatestNotices/Infographics/CreateNewInfograficMessage';
import UserLogin from './Components/UserManagement/UserLogin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { rootURI } from './Components/rootURLs/root_uri';

function App() {
  const [loggedIn, setLoggedIn]=useState(false);
  const [userData, setUserData]=useState({})

  const config={
    headers:{
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
  }

  useEffect(()=>{
    axios.get(rootURI+'/auth_user', config)
    .then((response)=>{
      setLoggedIn(true);
      setUserData(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, []);
 

  return (
    <div className="App">
      <div className='container'>
        <div className='left-side'>
          <BrowserRouter>
            <AppHeader loggedIn={loggedIn} userData={userData} setLoggedIn={setLoggedIn}/>
              <Routes>
                {/* End user lever routes */}
                <Route path='/' element={<AppInfos setLoggedIn={setLoggedIn}/>} />
                <Route path='/address-book' element={<AddressBooks setLoggedIn={setLoggedIn} />} />)
                <Route path='/corporate-notices' element={<CorporateNotices  setLoggedIn={setLoggedIn} />} />
                <Route path='/downloads' element={<DownloadableFiles setLoggedIn={setLoggedIn}/>} />
                <Route path='*' element={<PageNotFound />} />

                {/* User authentication routes */}
                <Route path='/login' element={<UserLogin setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>} />

                {/* Administrative Routes */}
                <Route path='/create_service' element={<CreateNewAppInfo loggedIn={loggedIn} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>} />
                <Route path='/create_notice' element={<CreateNewNotice loggedIn={loggedIn} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>} />
                <Route path='/upload_file' element={<CreateNewDownloadables loggedIn={loggedIn}  setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>} />
                <Route path='/create_infographic_message' element={<CreateNewInfograficMessage loggedIn={loggedIn} setLoggedIn={setLoggedIn}  userData={userData} setUserData={setUserData}/>} />
              </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
        <div className='right-side'>
              <LatestNotices/>
        </div>
      </div>
    </div>
  );
}

export default App;
