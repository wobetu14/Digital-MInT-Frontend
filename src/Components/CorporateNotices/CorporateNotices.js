import React from 'react'
import { useEffect, useState } from 'react';
import CorporateNotice from './CorporateNotice';
import './CorporateNotices.css';

function CorporateNotices() {

    const [corporateNotices, setCorporateNotices]=useState([]);

    useEffect(()=>{
       fetchCorporateNoticesData();
    }, []);

    const fetchCorporateNoticesData = async () => {
      const url = 'http://192.168.8.155/mint-intranet/public/api/corporate_notices';
      const response = await fetch(url);
      const data = await response.json();
      setCorporateNotices(data);
  }

  return (
    <div className='notices_container'>
      <h1 className='notice_header'>MInT Corporate Notices</h1>
      <div className='notices__list'>
        {
            corporateNotices.map((corporateNotice)=>(
                <CorporateNotice corporateNotice={corporateNotice} key={corporateNotice.id} />
            ))
        }
       </div>
    </div>
  )
}

export default CorporateNotices