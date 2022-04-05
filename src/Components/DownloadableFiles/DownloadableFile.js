import { faCloudArrowDown, faCloudDownload, faDownload, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './DownloadableFiles.css'

function DownloadableFile({downloadableFile:{file_title, file_description, 
file_author, file_owner, file_name, created_at, updated_at}}) {
  return (
    <div>
        <div className='addressbook_containers'>
           <div className='addressbook_header_officename'>
           <h2>{file_title}</h2>
           </div>
           <div className='addressbook_body'>
               <div className='addressbook_detail'>
                <p><strong>File Name: </strong>{file_name} </p>
                <p><strong>Description: </strong>{file_description}</p>
                <p><strong>Author: </strong>{file_author}</p>
                {/* <p><strong>Office Responsibility: </strong>{office_responsibility}</p> */}
                <p><strong>File Owner: </strong>{file_owner}</p>
                
                
                    <div style={{ textAlign:'right' }}>
                        <a className='download_link' href={`http://192.168.8.155/mint-intranet/public/downloadable_files/${file_name}`}>
                        Download File &nbsp;
                        <FontAwesomeIcon icon={faDownload} />
                        </a>
                    </div>
               </div>
           </div>
       </div> 
    </div>
  )
}

export default DownloadableFile