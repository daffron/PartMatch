import React from 'react'
import NewUser from './NewUser'
import SearchSell from './SearchSell'
import {HashRouter as Router, BrowserRouter, Route, Link} from 'react-router-dom'

function NavBar (props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">PartMatch</a>
                </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Browse Wanted</a></li>
                        <li><a href="#">Browse For Sale</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to ="/newu"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
                <BrowserRouter>
                <div className="col-sm-3 col-md-3 pull-right">
        <form className="navbar-form" role="search" action="/searchresult.html" method="GET">
            <select name="srchcat">
                <option value="searchselling">For Sale</option>
                <option value="searchwanted">Wanted</option>
            </select>
            
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search For Sale" name="srch" id="srch"/>

            <div className="input-group-btn">
          
                
               <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
        </div>
        </BrowserRouter>
            </div>
        </nav>
    )
}

export default NavBar