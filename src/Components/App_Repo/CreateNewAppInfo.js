import React, { useState } from 'react'
import axios from 'axios';
import { rootURI } from '../rootURLs/root_uri';
import '../FormStyles/FormStyles.css';
import UserLogin from '../UserManagement/UserLogin';
import CheckLogin from '../UserManagement/CheckLogin';

function CreateNewAppInfo({loggedIn, setLoggedIn}) {

    const [appName, setAppName]=useState('');
    const [appDescription, setAppDescription]=useState('');
    const [appIpAddress, setAppIpAddress]=useState('');
    const [appURL, setAppURL]=useState('');
    const [imageThumbnail, setImageThumbnail]=useState('');

    const [successMsg, setSuccessMsg]=useState('');

    const onAppNameChange=(e)=>{
        const getAppName=e.target.value;
        setAppName(getAppName);
    }

    const onAppDescriptionChange=(e)=>{
        const getAppDescription=e.target.value;
        setAppDescription(getAppDescription);
    }

    const onAppIpAddressChange=(e)=>{
        const getAppIpAddress=e.target.value;
        setAppIpAddress(getAppIpAddress);
    }

    const onAppURLChange=(e)=>{
        const getAppURL=e.target.value;
        setAppURL(getAppURL);
    }

    const onImagethumbnailChange=(e)=>{
        const image=e.target.files[0];
        setImageThumbnail(image);
    }

      const saveAppInfo = (e) => {

        e.preventDefault()
        const formData=new FormData();
        formData.append('app_name',appName);
        formData.append('app_description',appDescription);
        formData.append('app_ipaddress',appIpAddress);
        formData.append('app_url',appURL);
        formData.append('app_thumbnail', imageThumbnail);

        const config={
            headers:{
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
          }

                    // send a POST request
            axios.post(rootURI+'/create_new_app', formData, config)
            .then((response)=>{
                setSuccessMsg(response.data.success)
            })
              .catch((error)=>{
                  console.log(error)
              });        
      }

      if(!loggedIn){
          return (<CheckLogin setLoggedIn={setLoggedIn} />)
      }

    return (
        <div style={{marginTop:'70px', marginLeft:'230px'}}>
            <h3 className='appinfos_form_title'>Create New Digital Service</h3>
              {successMsg && <p className='successMsg'>{successMsg}</p>}
                <form onSubmit={saveAppInfo} className='form_container'>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='appName'
                        placeholder='Service Name'
                        value={appName}
                        onChange={onAppNameChange}
                    />
                    </div>
                    <div>

                    <textarea
                        className='form_element'
                        type='text'
                        name='appDescription'
                        placeholder='Service Description'
                        rows='10' 
                        cols='30'
                        value={appDescription}
                        onChange={onAppDescriptionChange}>              
                    </textarea>

                    </div>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='appURL'
                        placeholder='Service URL'
                        value={appURL}
                        onChange={onAppURLChange}
                    />
                    </div>
                    
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='appIpAddress'
                        placeholder='IP Address'
                        value={appIpAddress}
                        onChange={onAppIpAddressChange}
                    />
                    </div>

                    <div>
                    <input
                        className='form_element'
                        type='file'
                        onChange={onImagethumbnailChange}
                    />
                    </div>

                    {imageThumbnail && (
                        <div className='file_details'>
                            <h2 style={{ textAlign:'center' }}>File Details</h2>
                            <p>File Name: {imageThumbnail.name}</p>
                            <p>File Type: {imageThumbnail.type}</p>
                            <p>File Size: {(imageThumbnail.size)/1024} MB</p>
                            <p className='image_display' style={{ maxWidth:'200px', maxHeight:'200px' }}> {imageThumbnail && <ImageThumb image={imageThumbnail} />}</p>
                        </div>
                    )}
                   
                    <button type='submit' className='form_submit_btn' onClick={saveAppInfo}>Save Service Info</button>
                </form>
        </div>
    )
}

export default CreateNewAppInfo

/**
 * Component to display thumbnail of image.
 */
 const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };