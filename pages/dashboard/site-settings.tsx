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



function ImageUploadField (props:any) {
  const [files, setFiles] = useState<any>([])

  console.log('props.value', props.value)
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
      <h1>You Site</h1>
      <p>
        Here you can configure your site settings
      </p>
      
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body">

          <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
            <h2 className="h4 mb-0">General Styling</h2>
          </div>

          <Form uiSchema={uiSchema} schema={{
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
          }} validator={validator} 
          
            /*onChange={(e) => {
              console.log('formData', formData)
            //  setFormData(e.formData);
               
            }}*/
          />
        </div>
      </section>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body"> 

          <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
            <h2 className="h4 mb-0">Landing page</h2>
          </div>
          
          <LandingPageSettings />
        </div>
      </section>
    </DashboardLayout>
  );
}


const LandingPageSettings = () =>{
  return <div className="accordion" id="accordionDefault">
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Main 
        </button>
      </h3>
      <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">
          <Form schema={{
            "properties": {
              "type": {
                title: "Type of Call to action",
                enum: [
                  "WaitingList",
                  "Subsciption",
                  "Products overview",
                  "SignUpQuestionairre"],
                enumNames: [
                  "Waiting  List",
                  "Subsciption",
                  "Products overview",
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
          }} validator={validator} />
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Testimonials <span className="pill"> Active </span>
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          About
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Subscription Picker
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Product Overview
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Transformations
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Count Down (discount)
        </button>
      </h3>
      <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionDefault">
        <div className="accordion-body fs-sm">

        </div>
      </div>
    </div>
    
  </div>
}
