import React, { useEffect, useState } from 'react'
import InfographicsMessages from './Infographics/InfographicsMessages';
import LatestNotice from './LatestNotice';
import './LatestNotices.css'

function LatestNotices() {
    const [latestNotices, setLatestNotices]=useState([]);

    useEffect(()=>{
       fetchLatestNoticesData();
    }, []);

    const fetchLatestNoticesData = async () => {
      const url = 'http://192.168.8.155/mint-intranet/public/api/side_notices';
      const response = await fetch(url);
      const data = await response.json();
      setLatestNotices(data);
  }

  return (
    <div className='noticeboard_notices_container'>
      <h1 className='noticeboard_notices_header'>Notice Board</h1>
      <div>
        <InfographicsMessages />
      </div>
      <div className='noticeboard_notices__list'>
        {
            latestNotices.map((latestNotice)=>(
                <LatestNotice latestNotice={latestNotice} key={latestNotice.id} />
            ))
        }
       </div>
    </div>
  )
}

export default LatestNotices