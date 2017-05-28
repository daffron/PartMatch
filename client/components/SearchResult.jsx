import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function SearchResult (props) {


    return (
        <Router>
            <div className="searchresults row">
                <h1>Search Results for {props.searchTerm}</h1>
                {props.searchresult.map((item,key) => {
                    return(
                    <div key={key} className="single-result col-xs-2">
                        <h3>{props.wantorsell}</h3>
                        <h3 >{item.title}</h3>
                        <h5>${item.price}</h5>
                        <Link to={`/listing/${item._id}`}><button onClick={() => props.viewListingClick.bind(this)(props.wantorsell, item._id)}>View</button></Link>
                    </div>
                    )
                })}
            </div>
        </Router>
    )

}

export default SearchResult