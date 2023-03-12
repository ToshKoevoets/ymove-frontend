import Card from "@/components/home/card";
import DashboardLayout from "@/components/layout/dashboard";
import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import React, { useState } from "react";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const saveSiteConfig = async (site, jwt, key, newData) => {
  const dataResponse = await fetch(`/api/site/${site.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      "X-Authorization": `Bearer ${jwt}`,
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify({
      config: {
        ...site.config,
        [key]: {
          ...(site[key] ? site[key] : {}),
          ...newData
        }
      }
    })
  });

  const data = await dataResponse.json();
  return data;
}

/*
 <Form schema={{
            "properties": {
              "logo": {
                "type": "string",
                "title": "Logo",
              },
              "lastName": {
                "type": "string",
                "title": "First name"
              },
              "age": {
                "type": "integer",
                "title": "Age"
              },
              "bio": {
                "type": "string",
                "title": "Bio"
              },
              "password": {
                "type": "string",
                "title": "Password",
                "minLength": 3
              },
              "telephone": {
                "type": "string",
                "title": "Telephone",
                "minLength": 10
              }
            }
          }} validator={validator} />
*/

function ImageUploadField (props) {
  const [files, setFiles] = useState([])

  return (
    <div>
      <FilePond
        name="image"
        allowMultiple={true}
        onupdatefiles={fileItems => {
          // Set currently active file objects to this.state
          const files = fileItems.map(fileItem => fileItem.file);
          setFiles(files)
        }}
        oninit={() => {
          const currentImages = props.value ?[props.value].map(function (image) {

            return {
              source: { url: image },
              options: {
                type: "local",
                file: {
                  name: image,
                  //		 size: 3001025,
                  //	 type: 'image/png'
                },
                metadata: {
                  poster: image,
                }
              },
            }
          }) : false;

          if (currentImages) {
            setFiles(currentImages)
          }
        }}
        files={files}
        server={{
          process: {
            url: '/api/image',
            onload: (response) => { // Once response is received, pushed new value to Final Form value variable, and populate through the onChange handler.
              const file = JSON.parse(response);
             // this.updateImages(this.pond.getFiles(), file);
              const url = JSON.parse(response).url
              props.onChange(url);
              return url;
            },
            onerror: (response) => {
              return false;
            }
          }
        }}
        onremovefile={(error, file) => {
          props.onChange();
        }}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

const widgets = {
  image: ImageUploadField
};

const uiSchema = {
  logo: {
    'ui:widget': ImageUploadField//'image',
  },
  accentColor: {
    'ui:widget': 'color',
  },
};



export default function Dashboard(props) {
  const [formData, setFormData] = React.useState(null);

  return (
    <DashboardLayout user={props.user} site={props.site} meta={{
      title: "Dashboard",
    }}>
      <h1>Your Site</h1>
      <p>
        Here you can configure your site settings
      </p>
      
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
            <h2 className="h4 mb-0">General Styling</h2>
          </div>

          <Form 
            onSubmit={async ({ formData }, e) => {
              await saveSiteConfig(props.site, props.user.jwt, 'styling', formData);
            }}
            formData={props.site.config.styling}
            uiSchema={uiSchema} 
            schema={{
              "properties": {
                "logo": {
                  "type": "string",
                  "title": "Logo",
                },
                "accentColor": {
                  "type": "string",
                  "title": "Brand Color"
                },
              }
            }} 
            validator={validator} 
            onChange={(e) => {
              console.log('e.formData', e.formData)
            //  setFormData(e.formData);
            }}
          />
        </div>
      </section>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body"> 

          <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
            <h2 className="h4 mb-0">Landing page</h2>
          </div>
          
          <LandingPageSettings {...props} />
        </div>
      </section>
    </DashboardLayout>
  );
}


const LandingPageSettings = (props) =>{
  const [activeAccord, setAccord] = useState('');

  return <div className="accordion" id="accordionDefault">
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingOne">
        <button onClick={() => {
          setAccord(activeAccord !== 'main' ?  'main': '');
        }} className={`accordion-button  ${activeAccord !== 'main' ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Main 
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'main' ? 'show' : ''}`} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">
          <Form 
            schema={{
              "properties": {
                "type": {
                  title: "Type of Call to action",
                  enum: [
                    "WaitingList",
                    "Subsciption",
                    "Products overview",
                    "Download App",
                    "SignUpQuestionairre"],
                  enumNames: [
                    "Waiting  List",
                    "Subsciption",
                    "Products overview",
                    "Download App",
                    "Sign up questionairre (configured in app editor)",
                  ],
                },
                "headerType": {
                  enum: [
                    "BackgroundImage",
                    "CutOutImage",
                    "PhoneScreenshot",],
                  enumNames: [
                    "Background Image",
                    "Cut out image",
                    "Phone Screenshot", 
                  ],
                  "title": "Header Types"
                
                },
                "backgroundImage": {
                  "type": "string",
                  "title": "Background Image"
                },
                "cutOutImage": {
                  "type": "string",
                  "title": "Cut out Image"
                },
                "phoneMainImage": {
                  "type": "string",
                  "title": "Phone Screenshot",
                  "description": "Make sure the background is transparent"
                },
                "headline": {
                  "type": "string",
                  "title": "Headline"
                },
                "description": {
                  "type": "string",
                  "title": "Description"
                },
                "keyPoints": {
                  "type": "string",
                  "title": "Key Points"
                },
              }
            }} 
            uiSchema={{
              backgroundImage: {
                'ui:widget': ImageUploadField//'image',
              },
              cutOutImage: {
                'ui:widget': ImageUploadField//'image',
              },
              phoneMainImage: {
                'ui:widget': ImageUploadField//'image',
              },
            }}
            validator={validator} 
            onSubmit={async ({ formData }, e) => {
              await saveSiteConfig(props.site, props.user.jwt, 'landing', formData);
            }}
            formData={props.site.config.landing}
        />
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button onClick={() => {
          setAccord(activeAccord !== 'main' ? 'main' : '');
        }} className={`accordion-button ${activeAccord !== 'testimonials' ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Testimonials <span className="pill"> Active </span>
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'testimonials' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3 id="headingTwo">
        <button className={`accordion-button ${activeAccord !== 'about' ? 'collapsed' : ''}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          About
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'about' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3  id="headingTwo">
        <button className={`accordion-button ${activeAccord !== 'testimonials' ? 'collapsed' : ''}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Subscription Picker
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'main' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3 id="headingTwo">
        <button c className={`accordion-button ${activeAccord !== 'testimonials' ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Product Overview
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'main' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3 id="headingTwo">
        <button className={`accordion-button ${activeAccord !== 'testimonials' ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Transformations
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'Transformations' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3  id="headingTwo">
        <button className={`accordion-button ${activeAccord !== 'testimonials' ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Count Down (discount)
        </button>
      </h3>
      <div className={`accordion-collapse collapse ${activeAccord === 'Count Down' ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    
  </div>
}
