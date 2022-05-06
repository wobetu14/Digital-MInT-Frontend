import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rootURI } from '../rootURLs/root_uri';
import InfographicsMessages from './Infographics/InfographicsMessages';
import LatestNotice from './LatestNotice';
import './LatestNotices.css'
import { faAdd, faHome } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AdminArea from './AdminArea/AdminArea';

function LatestNotices() {
    const [latestNotices, setLatestNotices]=useState([]);

    useEffect(()=>{
        fetchLatestNoticesData();
    }, []);

    /**
     * Sync in every 10 seconds
     */
    useEffect(()=>{
      const interval=setInterval(()=>{
        fetchLatestNoticesData();
      }, 10000)  
      return()=>clearInterval(interval)
    }, []);

    const fetchLatestNoticesData = async () => {
      const url = rootURI+'/side_notices';
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

       <div>
        {/* <AdminArea /> */}
       </div>
    </div>
  )
}

export default LatestNotices