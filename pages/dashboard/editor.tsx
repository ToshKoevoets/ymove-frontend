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

function ImageUploadField(props) {
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
          const currentImages = props.value ? [props.value].map(function (image) {

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
  const [activeAccord, setAccord] = useState('');

  return (
    <DashboardLayout user={props.user} site={props.site} meta={{
      title: "Dashboard",
    }}>
      <h3>Chat</h3>
    </DashboardLayout>  
  );
}
