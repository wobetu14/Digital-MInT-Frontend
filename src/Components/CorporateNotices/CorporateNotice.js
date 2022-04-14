import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { notice_file_attachments } from '../rootURLs/root_uri'
import './CorporateNotice.css'

function CorporateNotice({corporateNotice:{notice_audience, notice_owner, notice_subject, notice_main_content, notice_attachement, active_status, created_at, updated_at}}) {
  return (
    <div>
        <div className="notice_container">
           <div className='notice_subject'>
               <h1><strong>{notice_subject}</strong></h1> 
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

               {
                 notice_attachement ? (
                  <p style={{ textAlign:'right' }}>
                    <a className='download_link' href={`${notice_file_attachments + notice_attachement}`}>
                      Download attachment &nbsp;
                    <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </p>
                 ):(null)
               }
           </div>
        </div>
    </div>
  )
}

export default CorporateNotice