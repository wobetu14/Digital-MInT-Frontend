import React, { useState } from 'react'
import axios from 'axios';
import { rootURI } from '../rootURLs/root_uri';
import UserLogin from '../UserManagement/UserLogin';
import CheckLogin from '../UserManagement/CheckLogin';

function CreateNewNotice({loggedIn, setLoggedIn, userData, setUserData}) {
    const [noticeAudience, setNoticeAudience]=useState('');
    const [noticeOwner, setNoticeOwner]=useState('');
    const [noticeSubject, setNoticeSubject]=useState('');
    const [noticeMainContent, setNoticeMainContent]=useState('');
    const [noticeAttachement, setNoticeAttachement]=useState('');

    // Display Response Message
    const [successMsg, setSuccessMsg]=useState('');

    // Capture value upon onChange event
    const onNoticeAudienceChange=(e)=>{
        setNoticeAudience(e.target.value);
    }

    const onNoticeOwnerChange=(e)=>{
        setNoticeOwner(e.target.value);
    }

    const onNoticeSubjectChange=(e)=>{
        setNoticeSubject(e.target.value);
    }

    const onNoticeMainContentChange=(e)=>{
        setNoticeMainContent(e.target.value);
    }

    const onNoticeAttachementChange=(e)=>{
        setNoticeAttachement(e.target.files[0]);
    }
    

    const saveCorporateNotice=(e)=>{
        
        e.preventDefault()
        const formData=new FormData();
        formData.append('notice_audience',noticeAudience);
        formData.append('notice_owner',noticeOwner);
        formData.append('notice_subject',noticeSubject);
        formData.append('notice_main_content',noticeMainContent);
        formData.append('notice_attachement',noticeAttachement);

        const config={
            headers:{
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
          }

             // send a POST request
            axios.post(rootURI+'/create_new_notice', formData, config)
            .then((response)=>{
                setSuccessMsg(response.data.success)
            })
              .catch((error)=>{
                  console.log(error)
              }); 
    }

    if(!loggedIn){
        return (<CheckLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>)
    }

  return (
    <div style={{marginTop:'70px', marginLeft:'230px'}}>
        <h3 className='appinfos_form_title'>Create New Corporate Notice</h3>
            {successMsg && <p className='successMsg'>{successMsg}</p>}
                <form onSubmit={saveCorporateNotice} className='form_container'>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='noticeAudience'
                        placeholder='Audience ( To )'
                        value={noticeAudience}
                        onChange={onNoticeAudienceChange}
                    />
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='noticeOwner'
                        placeholder='Notice Owner ( From )'
                        value={noticeOwner}
                        onChange={onNoticeOwnerChange}
                    />
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='noticeSubject'
                        placeholder='Notice Subject'
                        value={noticeSubject}
                        onChange={onNoticeSubjectChange}
                    />
                    </div>

                    <div>
                    <textarea
                        className='form_element'
                        type='text'
                        name='noticeMainContent'
                        placeholder='Message Content'
                        rows='10' 
                        cols='30'
                        value={noticeMainContent}
                        onChange={onNoticeMainContentChange}>              
                    </textarea>

                    </div>
                    <div>
                    <input
                        className='form_element'
                        type='file'
                        name='noticeAttachement'
                        placeholder='Service URL'
                        // value={noticeAttachement}
                        onChange={onNoticeAttachementChange}
                    />
                    </div>

                    {noticeAttachement && (
                        <div className='file_details'>
                            <h2 style={{ textAlign:'center' }}>File Details</h2>
                            <p>File Name: {noticeAttachement.name}</p>
                            <p>File Type: {noticeAttachement.type}</p>
                            <p>File Size: {(noticeAttachement.size)/1048576.00} MB</p>
                            {/* <p className='image_display'> {noticeAttachement && <FileThumb file={noticeAttachement} />}</p> */}
                        </div>
                    )}
                   
                    <button type='submit' className='form_submit_btn' onClick={saveCorporateNotice}>Save Notice</button>
                </form>
    </div>
  )
}

export default CreateNewNotice