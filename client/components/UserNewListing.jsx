import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import {apiNewForSale} from '../api/'

const CLOUDINARY_UPLOAD_PRESET = 'listingimage'
const CLOUDINARY_UPLOAD_URL = 	'https://api.cloudinary.com/v1_1/partmatch/upload'

class UserNewListing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                title: '',
                price: 0,
                date_listed: new Date().toLocaleString('en-GB').substring(0, 10),
                description: '',
                keywords: '',
                user_id: this.props.profileProps.userId,
                location: '',
                listing_category: '',
                image_url: '',
                contactNo: this.props.profileProps.number,
                contactEmail: this.props.profileProps.email,
                uploadedFileCloudinaryUrl: ''
                

        }
        this.onImageDrop = this.onImageDrop.bind(this)

    }


    handleChange(evt){
        this.setState({       
            [evt.target.name]: evt.target.value

        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        apiNewForSale(this.state)
        console.log("this is the log on form handle submit of state", this.state)
       this.props.removeForm()
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        })
        this.handleImageUpload(files[0])
           
      
    } 

    handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)} placeholder="Title" name="title"/>
            <input type="text" onChange={this.handleChange.bind(this)}  placeholder="Category" name="listing_category"/>
            <input type="currency" onChange={this.handleChange.bind(this)} placeholder="Price" name="price"/>
            <input type="text" onChange={this.handleChange.bind(this)} placeholder="City" name="location"/>
            <input type="text" onChange={this.handleChange.bind(this)} name="keywords" placeholder="keywords"/>
            <input type="text" onChange={this.handleChange.bind(this)} name="description" placeholder="description"/>
            <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div>
        {this.state.image_url === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <h4>Upload Successful</h4>
        </div>}
      </div>
            
            <input type="submit" onChange={this.handleChange.bind(this)} value="Post your Listing"/>
        </form>
        </div>
    )
  }
}

export default UserNewListing