import axios from 'axios';
import React, { useState } from 'react'
import { rootURI } from '../rootURLs/root_uri';

function CreateNewDownloadables() {
  
    const [fileTitle, setFileTitle]=useState('');
    const [fileDescription, setFileDescription]=useState('');
    const [fileAuthor, setFileAuthor]=useState('');
    const [fileOwner, setFileOwner]=useState('');
    const [fileName, setFileName]=useState('');

    // Display Response Message
    const [successMsg, setSuccessMsg]=useState('');

    // Capture value upon onChange event
    const onFileTitleChange=(e)=>{
        setFileTitle(e.target.value);
    }

    const onFileDescriptionChange=(e)=>{
        setFileDescription(e.target.value);
    }

    const onFileAuthorChange=(e)=>{
        setFileAuthor(e.target.value);
    }

    const onFileOwnerChange=(e)=>{
        setFileOwner(e.target.value);
    }

    const onFileNameChange=(e)=>{
        setFileName(e.target.files[0]);
    }
    

    const uploadFile=(e)=>{
        
        e.preventDefault()
        const formData=new FormData();
        formData.append('file_title',fileTitle);
        formData.append('file_description',fileDescription);
        formData.append('file_author',fileAuthor);
        formData.append('file_owner',fileOwner);
        formData.append('file_name',fileName);

             // send a POST request
            axios.post(rootURI+'/upload_new_file', formData)
            .then((response)=>{
                setSuccessMsg(response.data.success)
            })
              .catch((error)=>{
                  console.log(error)
              }); 
    }
  return (
    <div style={{marginTop:'70px', marginLeft:'230px'}}>
        <h3 className='appinfos_form_title'>Upload New File</h3>
                <form onSubmit={uploadFile} className='form_container'>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='fileTitle'
                        placeholder='File title'
                        value={fileTitle}
                        onChange={onFileTitleChange}
                    />
                    </div>

                    <textarea
                        className='form_element'
                        type='text'
                        name='fileDescription'
                        placeholder='File Description'
                        rows='10' 
                        cols='30'
                        value={fileDescription}
                        onChange={onFileDescriptionChange}>              
                    </textarea>

                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='fileAuthor'
                        placeholder='File author'
                        value={fileAuthor}
                        onChange={onFileAuthorChange}
                    />
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='fileOwner'
                        placeholder='File owner'
                        value={fileOwner}
                        onChange={onFileOwnerChange}
                    />
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='file'
                        name='fileName'
                        placeholder='File Name'
                        onChange={onFileNameChange}
                    />
                    </div>

                    {fileName && (
                        <div className='file_details'>
                            <h2 style={{ textAlign:'center' }}>File Details</h2>
                            <p>File Name: {fileName.name}</p>
                            <p>File Type: {fileName.type}</p>
                            <p>File Size: {(fileName.size)/1048576.00} MB</p>
                            {/* <p className='image_display'> {noticeAttachement && <FileThumb file={noticeAttachement} />}</p> */}
                        </div>
                    )}
                   
                    <button type='submit' className='form_submit_btn' onClick={uploadFile}>Save Notice</button>

                    {successMsg && <p className='successMsg'>{successMsg}</p>}
                </form>
    </div>
  )
}

export default CreateNewDownloadables