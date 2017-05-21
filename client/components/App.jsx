
import React from 'react'
import NavBar from'./NavBar'
import NewUser from './NewUser'
import Banner from './Banner'
import Footer from './Footer'
import SearchSell from './SearchSell'
import LogIn from './LogIn'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <div className="app">
            <NavBar/>
            <Route path="/searchsell/?srch" component={SearchSell}/>
            <Banner/>
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

export default App