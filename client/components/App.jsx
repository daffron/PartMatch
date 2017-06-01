
import React from 'react'
import NavBar from'./NavBar'
import NewUser from './NewUser'
import Banner from './Banner'
import Footer from './Footer'
import SearchResult from './SearchResult'
import LogIn from './LogIn'
import Listing from './Listing'
import Profile from './Profile'
import ViewSold from './ViewSold'
import { Navbar, Button } from 'react-bootstrap';
import {Route, Link} from 'react-router-dom'


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
        if(category === 'searchsell'){
            this.searchForSale(term)
        } else {
            this.searchWanted(term)
        }
    }

    searchForSale(term){
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

    viewListingClick (){
        
        this.setState({
            displayBanner: false,
            displaySearchResult: false,
            displayListing: true
        
        })


    }

    profileClick() {

        this.setState({
            displayBanner: false,
            displaySearchResult: false,
            displayProfile: true
        })
    }


    render(){
        console.log(this.state.displayListing)

        return (

          <div className="app">

              <Route render={(routerProps) => <NavBar searchFunc={this.search} profileClick={this.profileClick} testuser={this.state.testuser} {...routerProps}/> } />
  
              <Route exact path="/" component={Banner}/>


              <Route
                path="/results"
                render={(routerProps) =>
                  <SearchResult
                    searchresult={this.state.searchArray} 
                    searchTerm={this.state.currentSearchTerm}
                    wantorsell={this.state.wantorsell}
                    viewListingClick={this.viewListingClick}
                    wantorsell={this.state.wantorsell}
                    {...routerProps}
                  />
                }
              />


              <Route path ={"/listing/:id"} render={(routeProps) => <Listing  wantorsell={this.state.wantorsell}{...routeProps}/> } />

              <Route path={"/user/:userId"} render={(appProps) => <Profile user={this.state.testuser}{...appProps}/>}/>
              <Route path={"/soldlisting/"}  component={ViewSold}/>

              <div className="row">
                  <div className="col-sm-8">
                  </div>
                  <div className="col-sm-4">
                      <Route path = "/newu" component={NewUser}/>
                      <Route path ="/login" component={LogIn}/>
                  </div>
              </div>
            
          </div>   

        )
    }
}

export default App