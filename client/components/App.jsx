
import React from 'react'
import NavBar from'./NavBar'
import NewUser from './NewUser'
import Banner from './Banner'
import Footer from './Footer'
import SearchResult from './SearchResult'
import LogIn from './LogIn'
import Listing from './Listing'
import Profile from './Profile'
import { Navbar, Button } from 'react-bootstrap';
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import {findAd} from '../../database/queries'
import {apiSearchSell, apiSearchWanted, apiGetSellListing, apiGetWantedListing} from '../api/'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            errormsg: null,
            displayBanner: true,
            displaySearchResult: false,
            displayListing: false,
            searchArray: [],
            currentSearchTerm: '',
            wantorsell: '',
            displayProfile: false,
            testuser: {
                username: 'John',
                userId: 123456,
                number: '02176483008',
                email: 'john@honsemail.com'

            }
        }
    this.search = this.search.bind(this)
    this.viewListingClick = this.viewListingClick.bind(this)
    this.profileClick = this.profileClick.bind(this)
    }



    search(term, category){
        console.log(term, category)
        if(category === 'searchsell'){
            this.searchForSale(term)
        } else {
            this.searchWanted(term)
        }
    }

    searchForSale(term){
        console.log('searching listings collection for term :', term)
        
        apiSearchSell((err, res) => {
            this.setState({
                displayBanner: false,
                displaySearchResult: true,
                searchArray: findAd(res.result, term),
                currentSearchTerm: term,
                wantorsell: 'selling!',
                displayListing: false,
                displayProfile: false
                
            })
     
        })
    }

    searchWanted (term) {
        console.log('searching wanted ads for term:' , term)
         apiSearchWanted((err, res) => {
            this.setState({
                displaySearchResult: true,
                displayBanner: false,
                searchArray: findAd(res.result, term),
                currentSearchTerm: term,
                wantorsell: 'wanted!',
                displayListing: false
            })
     
        })
    }

    viewListingClick (wantorsell, listingId) {
        
        this.setState({
            displayBanner: false,
            displaySearchResult: false,
            displayListing: true
        
        })

    }

    profileClick() {
        console.log('profile page')
        this.setState({
            displayBanner: false,
            displaySearchResult: false,
            displayProfile: true
        })
    }


    render(){

        return (
            <Router>
                <div className="app">
                    <NavBar searchFunc={this.search} profileClick={this.profileClick} testuser={this.state.testuser}/>
                    {this.state.displayBanner && <Banner/>}

                    {this.state.displaySearchResult && <SearchResult searchresult={this.state.searchArray} searchTerm={this.state.currentSearchTerm} wantorsell={this.state.wantorsell} viewListingClick={this.viewListingClick} wantorsell={this.state.wantorsell}/>}

                    {this.state.displayListing &&<Route path ={"/listing/:id"} render={(routeProps) =>  <Listing  wantorsell={this.state.wantorsell}{...routeProps}/>}/> }

                    {this.state.displayProfile&& <Route path={"/user/:userId"} render={(appProps) => <Profile user={this.state.testuser}{...appProps}/>}/>}


                    <div className="row">
                        <div className="col-sm-8">
                        </div>
                        <div className="col-sm-4">
                            <Route path = "/newu" component={NewUser}/>
                            <Route path ="/login" component={LogIn}/>
                        </div>
                    </div>
                    <Footer/>
                </div>   
            </Router> 
        )
    }
}

export default App