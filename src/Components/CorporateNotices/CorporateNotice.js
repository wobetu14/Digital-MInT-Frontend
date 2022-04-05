import React from 'react'
import './CorporateNotice.css'

function CorporateNotice({corporateNotice:{notice_audience, notice_owner, notice_subject, notice_main_content, notice_attachement, active_status, created_at, updated_at}}) {
  return (
    <div>
        <div className="notice_container">
           <div className='notice_subject'>
               <h1>Subject: <strong>{notice_subject}</strong></h1> 
           </div>
           <div className='notice_content'>
               <p className='main_content'>
                 {
                     notice_main_content
                 }
               </p>
               <p className='notice_owner'>
                  {
                      notice_owner
                  }
               </p>
           </div>
        </div>
    </div>
  )
}

export default CorporateNotice