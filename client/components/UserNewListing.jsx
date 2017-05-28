import React from 'react'

import {apiNewForSale} from '../api/'

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
                image_urls: [],
                contactNo: this.props.profileProps.number,
                contactEmail: this.props.profileProps.email
                

        }
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
            
            <input type="submit" onChange={this.handleChange.bind(this)} value="Post your Listing"/>
        </form>
        </div>
    )
  }
}

export default UserNewListing