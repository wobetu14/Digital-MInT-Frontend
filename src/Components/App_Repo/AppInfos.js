import React, { useEffect, useState } from 'react'
import AppLists from './AppLists';
import './AppInfos.css'
import { rootURI } from '../rootURLs/root_uri';

function AppInfos() {
    const [appsInfo, setAppsInfo]=useState([]);
    const [appName, setAppName]=useState([]);

    useEffect(()=>{
       fetchAppsData();
    }, []);

    const fetchAppsData = async () => {
      const url = rootURI+'/all-apps';
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      setAppsInfo(data);
  }

  const searchAppInfo = async (e)=>{
    e.preventDefault();
    const app_name = e.target.value;
    setAppName(app_name);
    if(app_name){
      const url = `${rootURI}/app/${app_name}`;
      const response = await fetch(url);
      if(response){
        const searchAppData = await response.json();
        setAppsInfo(searchAppData);
      }

      else{
        setAppsInfo([])
      }
    }
  }

  return (
    <div className='appinfos'>
      <h1 className='appinfos__header2'>MInT Digital Services</h1>
          <form className='form_appName'>
              <input
                className='textAppName'
                type='text'
                id='appName'
                name='app_name'
                placeholder='Search by Service Name'
                value={appName}
                onChange={searchAppInfo}
              />
          </form>
      <div className='appinfos__list'>
      {
          appsInfo.map((appInfo)=>(
            <AppLists appInfo={appInfo} key={appInfo.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default AppInfos