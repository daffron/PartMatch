
import React from 'react'
import NavBar from'./NavBar'
import NewUser from './NewUser'
import Banner from './Banner'
import NewListing from './NewListing'
import Footer from './Footer'
import SearchResult from './SearchResult'
import LogIn from './LogIn'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {findAd} from '../../database/queries'
import {apiSearchSell} from '../api/'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            errormsg: null,
            displaySearchResult: false,
            searchArray: [],
            currentSearchTerm: '',
            wantorsell: ''
        }
    this.search = this.search.bind(this)
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
                displaySearchResult: true,
                searchArray: findAd(res.result, term),
                currentSearchTerm: term,
                wantorsell: 'selling!'
            })
     
        })
    }

    searchWanted (term) {
        console.log('searching wanted ads for term:' , term)
    }
    render(){
        return (
            <Router>
                <div className="app">
                    <NewListing/>
                    <NavBar searchFunc={this.search}/>
                    {!this.state.displaySearchResult && <Banner/>}
                    {this.state.displaySearchResult && <SearchResult searchresult={this.state.searchArray} searchTerm={this.state.currentSearchTerm} wantorsell={this.state.wantorsell}/>}
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