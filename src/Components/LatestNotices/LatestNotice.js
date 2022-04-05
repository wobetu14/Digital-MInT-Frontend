import React from 'react'
import './LatestNotice.css'

function LatestNotice({latestNotice:{notice_audience, notice_owner, notice_subject, notice_main_content, notice_attachement, active_status, created_at, updated_at}}) {
  return (
    <div>
        <div className="noticeboard_notice_container">
           <div className='noticeboard_notice_subject'>
               <h1><strong>{notice_subject}</strong></h1> 
           </div>
           <div className='noticeboard_notice__content'>
               <p className='noticeboard_notice_main_content'>
                 {
                     notice_main_content
                 }
               </p>
               <p className='noticeboard_notice_owner'>
                  {
                      notice_owner
                  }
               </p>
           </div>
        </div>
    </div>
  )
}

export default LatestNotice