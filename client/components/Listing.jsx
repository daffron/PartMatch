import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {apiGetSellListing, apiGetWantedListing} from '../api/'

class Listing extends React.Component{
    constructor(props){
        super(props)
       console.log(props)
        this.state= {
            wantorsell: props.wantorsell,
            listingId:  props.match.params.id,
            title: '',
            description: '',
            user: '',
            price: 0,
            image_url: '',
            location: '',
            geoLocation:  []
        }
        this.listingDetails = this.listingDetails.bind(this)
    }

    //on componentDidMount make a database query to find the listing details using listing_id, and find the user using session and another datatbase call

    componentDidMount(){
       this.listingDetails()
    }

    listingDetails(){
        const wantorsell = this.state.wantorsell
        const listingId = this.state.listingId
    if (wantorsell === 'selling!'){
            console.log(listingId)
            apiGetSellListing(this.props.match.params.id, (err, res) => {
                if(err) {
                    console.log(err.message)
                }
                this.setState({
                    title: res.title,
                    description: res.description,
                    price: res.price ,
                    location: res.location,
                    image_url: res.image_url,
                    email: res.contactEmail
                })
            })
        } else {
            apiGetWantedListing(listingId)
        }
    }


    render(){
      console.log('running')
        return(
            
                <div className="listing row">
                    <div className="col-sm-4">
                        <img src={this.state.image_url} width="350"/>
                    </div>
                    <div className="col-sm-8">
                    <h1>{this.state.title}</h1>
                    <hr/>
                    <ul>
                        <li>Price: ${this.state.price}</li>
                        <hr/>
                        <li>{this.state.description}</li>
                        <hr/>
                        <li>This item is located in {this.state.location}</li>
                        <hr/>
                        <li><a href={`mailto:${this.state.email}?Subject=${this.state.title}`}><span className="glyphicon glyphicon-envelope"></span>Send email</a></li>
                    </ul> 

                </div>
                    </div>
            
        )
    }
}

export default Listing