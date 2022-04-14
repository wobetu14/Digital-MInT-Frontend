import axios from 'axios';
import React, { useState } from 'react'
import { rootURI } from '../../rootURLs/root_uri';

function CreateNewInfograficMessage() {

    const [infographicsSubject, setInfographicsSubject]=useState('');
    const [infographicsDescription, setInfographicsDescription]=useState('');
    const [imagePath, setImagePath]=useState('');
    const [displayDuration, setDisplayDuration]=useState('');
    const [displayStatus, setDisplayStatus]=useState('active');

    // Display Response Message
    const [successMsg, setSuccessMsg]=useState('');

    // Capture value upon onChange event
    const onInfographicSubjectChange=(e)=>{
        setInfographicsSubject(e.target.value);
    }

    const onInfographicsDescChange=(e)=>{
        setInfographicsDescription(e.target.value);
    }

    const onImagePathChange=(e)=>{
        setImagePath(e.target.files[0]);
    }

    const onDisplayDurationChange=(e)=>{
        setDisplayDuration(e.target.value);
    }
    

    const saveInfographicsMsg=(e)=>{
        
        e.preventDefault()
        const formData=new FormData();
        formData.append('infographics_subject',infographicsSubject);
        formData.append('infographics_description',infographicsDescription);
        formData.append('image_path',imagePath);
        formData.append('display_duration',displayDuration);
        formData.append('display_status',displayStatus);

             // send a POST request
            axios.post(rootURI+'/create_infographics_message', formData)
            .then((response)=>{
                setSuccessMsg(response.data.success)
            })
              .catch((error)=>{
                  console.log(error)
              }); 
    }
  return (
    <div style={{marginTop:'70px', marginLeft:'230px'}}>
        <h3 className='appinfos_form_title'>Create New Corporate Notice</h3>
                <form onSubmit={saveInfographicsMsg} className='form_container'>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='infographicsSubject'
                        placeholder='Subject'
                        value={infographicsSubject}
                        onChange={onInfographicSubjectChange}
                    />
                    </div>

                    <div>
                    <textarea
                        className='form_element'
                        name='infographicsDescription'
                        placeholder='Description'
                        rows='10' 
                        cols='30'
                        value={infographicsDescription}
                        onChange={onInfographicsDescChange}>              
                    </textarea>
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='number'
                        name='displayDuration'
                        placeholder='Display Duration'
                        value={displayDuration}
                        onChange={onDisplayDurationChange}
                    />
                    </div>

                        {/* Display status is active by default. No input element needed here. */}

                    <div>
                    <input
                        className='form_element'
                        type='file'
                        name='imagePath'
                        placeholder='Attach Infographics'
                        // value={noticeAttachement}
                        onChange={onImagePathChange}
                    />
                    </div>

                    {imagePath && (
                        <div className='file_details'>
                            <h2 style={{ textAlign:'center' }}>File Details</h2>
                            <p>File Name: {imagePath.name}</p>
                            <p>File Type: {imagePath.type}</p>
                            <p>File Size: {(imagePath.size)/1048576.00} MB</p>
                            <p className='image_display' style={{ maxWidth:'200px', maxHeight:'200px' }}> {imagePath && <InfograpcisImage image={imagePath} />}</p>
                        </div>
                    )}
                   
                    <button type='submit' className='form_submit_btn' onClick={saveInfographicsMsg}>Save Infographics Message</button>

                    {successMsg && <p className='successMsg'>{successMsg}</p>}
                </form>
    </div>
  )
}

export default CreateNewInfograficMessage

/**
 * Component to display thumbnail of image.
 */
 const InfograpcisImage = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };