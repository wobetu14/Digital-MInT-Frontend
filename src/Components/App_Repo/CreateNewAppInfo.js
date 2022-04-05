import React, { useState } from 'react'
import axios from 'axios';

function CreateNewAppInfo() {

    const [appName, setAppName]=useState('');
    const [appDescription, setAppDescription]=useState('');
    const [appIpAddress, setAppIpAddress]=useState('');
    const [appURL, setAppURL]=useState('');
    const [imageThumbnail, setImageThumbnail]=useState(null);

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
        const getImageThumbnail=e.target.files[0];
        setImageThumbnail(getImageThumbnail);
    }

      const onSubmit = (e) => {
        /* 
         e.preventDefault()
          stops the default behavior of form element
         specifically refreshing of page
         */
        e.preventDefault()
        console.log(imageThumbnail)

        // axios.post('http://192.168.8.155/mint-intranet/public/api/create-new-app', {
        //     app_name: appName,
        //     app_description: appDescription,
        //     app_ipaddress: appIpAddress,
        //     app_url: appURL,
        //     app_thumbnail:imageThumbnail
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        //   console.log(appName)
      }

    return (
        <div style={{marginTop:'70px'}}>
            <h3>Create New Digital Service</h3>
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <div>
                    <input
                        type='text'
                        name='appName'
                        placeholder='Service Name'
                        value={appName}
                        onChange={onAppNameChange}
                    />
                    </div>
                    <div>

                    <textarea
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
                        type='text'
                        name='appURL'
                        placeholder='Service URL'
                        value={appURL}
                        onChange={onAppURLChange}
                    />
                    </div>
                    
                    <div>
                    <input
                        type='text'
                        name='appIpAddress'
                        placeholder='IP Address'
                        value={appIpAddress}
                        onChange={onAppIpAddressChange}
                    />
                    </div>
                    <div>
                    <input
                        type='file'
                        name='imageThumbnail'
                        placeholder='Image thumbnail'
                        value={imageThumbnail}
                        onChange={onImagethumbnailChange}
                    />
                    </div>
                    
                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
}

export default CreateNewAppInfo