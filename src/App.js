import { BrowserRouter, Link, Outlet, Route, Routes  } from 'react-router-dom';
import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left-side'>
          <BrowserRouter>
            <AppHeader />
              <Routes>
                {/* End user lever routes */}
                <Route path='/' element={<AppInfos />} />
                <Route path='/address-book' element={<AddressBooks />} />
                <Route path='/corporate-notices' element={<CorporateNotices />} />
                <Route path='/downloads' element={<DownloadableFiles />} />
                <Route path='*' element={<PageNotFound />} />

                {/* Administrative Routes */}
                <Route path='/create_service' element={<CreateNewAppInfo/>} />
                <Route path='/create_notice' element={<CreateNewNotice/>} />
                <Route path='/upload_file' element={<CreateNewDownloadables/>} />
                <Route path='/create_infographic_message' element={<CreateNewInfograficMessage />} />
              </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
        
        <div className='right-side'>
              <LatestNotices />
        </div>
      </div>
    </div>
  );
}

export default App;
