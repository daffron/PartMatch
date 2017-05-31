import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {apiGetSellListing, apiGetWantedListing, apiMakeSold} from '../api/'
import PaypalExpressBtn from 'react-paypal-express-checkout';

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
        // this.onSuccess = this.onSuccess.bind(this)
       
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
                    email: res.contactEmail,
                    paymentSuccess: false,
                    exampleUserId: 123456 //will come from JWT upon auth
                })
            })
        } else {
            apiGetWantedListing(listingId)
        }
    }


    render(){
        const client = {
            sandbox:    'AbTTgTAlevqJz2q4DDUVsM4CjRk2b8MXPPR4CDdSPvs1pvT-DFLJzoNQXDAqzUNToqO5i5tSlGOR-tRg',
            production: 'YOUR-PRODUCTION-APP-ID',
        } 
        const onSuccess = (payment) => {
			
            		console.log("The payment was successful!", payment);
                apiMakeSold(this.state.exampleUserId, this.state.listingId)
                this.setState({
                  paymentSuccess: true
                })
                    
        }		
        
        const onCancel = (data) => {
          // User pressed "cancel" or close Paypal's popup!
          console.log('The payment was cancelled!', data);
          // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }	
        
        const onError = (err) => {
          // The main Paypal's script cannot be loaded or somethings block the loading of that script!
          console.log("Error!", err);
          // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
          
        }
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
                        <div id="paypal-button">
                          <PaypalExpressBtn client={client} currency={'NZD'} total={Number(this.state.price)} onSuccess={onSuccess}/>
                        </div>
                        {this.state.paymentSuccess && <h1>Payment Successful!</h1>}

                               
                        <li><a href={`mailto:${this.state.email}?Subject=${this.state.title}`}><span className="glyphicon glyphicon-envelope"></span>Send email</a></li>
                    </ul> 

                </div>
              </div>
            
        )
    }
}

export default Listing