import React from 'react'
import {Link, HashRouter as Router, Route} from 'react-router-dom'
import {apiSearchSell, apiSearchWanted, apiGetSellListing, apiGetWantedListing, apiDeleteListing} from '../api/'
import ProfileListing from './ProfileListing'
import UserNewListing from './UserNewListing'

class Profile extends React.Component{
    constructor(props){
    super(props)

    this.state = {
        displayListingForm: false,
        showListings: false,
        sellingAds: [],
        wantedAds: []

    }
    this.showListings = this.showListings.bind(this)
    this.showListingForm = this.showListingForm.bind(this)
    this.removeForm = this.removeForm.bind(this)
  }

  removeForm(){
      this.setState({
          displayListingForm: false,
          displaySuccess: true
      })
  }S
  showListingForm(){
      this.setState({displayListingForm: true})
  
  }

  showListings(){
    const id = this.props.user.userId
   

    apiSearchSell((err, res) => {
        if (err){
            console.log(err.message)
            return
        }
         this.setState({
             sellingAds: res.result.filter((item) => {
            return  id === item.user_id
         })
         })
    })

    apiSearchWanted((err, res) => {
        if (err){
            console.log(err.message)
            return
        }
         this.setState({
             wantedAds: res.result.filter((item) => {
            return  id === item.user_id
         })
         })
    })
    this.setState({
        showListings: true
    })
  }

  handleClick(id){
      apiDeleteListing(id,() => {
      this.setState({
      })
     })
  }



  render(){
      return (
        <div>
          <div className="profile-page">
            <h1>Welcome back, {this.props.user.username}</h1>
            <div className="row profile-page-content">
                <div className="col-xs-4 col-md-4">
                <button onClick={this.showListings}><h3>View your current listings</h3></button>
                </div>
                <div className="col-xs-4 col-md-4">
                    <button onClick={this.showListingForm}><h3>Post a new for sale ad</h3></button>
                </div>
                <div className="col-xs-4 col-md-4">
                    <button><h3>Post a new wanted ad</h3></button>
                </div>
            </div>
            <hr/>
             <div className="row profile-page-content">
                <div className="col-xs-4 col-md-4">
                <button><h3>Items you've bought</h3></button>
                </div>
                <div className="col-xs-4 col-md-4">
                    <button><h3>Items you've sold</h3></button>
                </div>
                <div className="col-xs-4 col-md-4">
                    <button><h3>Profile Settings</h3></button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4 col-md-4">
                    {this.state.showListings&& <ProfileListing sellingAds={this.state.sellingAds} handleClick={this.handleClick.bind(this)}/>}
                </div>
                <div className="col-xs-4 col-md-4">
                    {this.state.displayListingForm&& <UserNewListing profileProps={this.props.user} removeForm={this.removeForm}/>}
                    {this.state.displaySuccess&& <h3>Oh Yea!, Your listing is online!</h3>}
                </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Profile