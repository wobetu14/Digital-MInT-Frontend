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
import DownloadableFile from './Components/DownloadableFiles/DownloadableFile';
import DownloadableFiles from './Components/DownloadableFiles/DownloadableFiles';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left-side'>
          <BrowserRouter>
            <AppHeader />
              <Routes>
                <Route path='/' element={<AppInfos />} />
                <Route path='/address-book' element={<AddressBooks />} />
                <Route path='/corporate-notices' element={<CorporateNotices />} />
                <Route path='/downloads' element={<DownloadableFiles />} />
                <Route path='*' element={<PageNotFound />} />

                {/* Administrative Routes */}

                <Route path='/create-service' element={<CreateNewAppInfo/>} />
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
