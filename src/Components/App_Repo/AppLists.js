import React from 'react'
import './AppLists.css';

function AppLists({appInfo:{app_name, app_description, app_ipaddress,app_url, app_thumbnail, created_at, updated_at}}) {
  return (
    <div className='applists__card'>
      <div className='applists__cardheader'>
        <img className='image' alt='' src={app_thumbnail?`http://192.168.8.155/mint-intranet/public/app_thumbnails/${app_thumbnail}`:''}/>
      </div>
      <div className='applists__cardbody'>
        <h3 className='applists__appname'>{app_name}</h3>
        <div>
            <p>{app_description.substring(0, 100)}...</p>
            <p className='appinfo__readmore'>
              <a href={`${app_ipaddress}`} target="_blank" rel='noreferrer' className='link_readmore'>Go to service</a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default AppLists