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
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="corner-ribbon top-left sticky red shadow ">
                            <h3>{props.wantorsell}</h3>
                            </div>
                            <h3 >{item.title}</h3>
                            <h5>${item.price}</h5>
                            <Link to={`/listing/${item._id}`}><button onClick={() => props.viewListingClick.bind(this)(props.wantorsell, item._id)}>View</button></Link>
                          </div>
                          <div className="col-xs-6 imagepreviews">
                            <img src={item.image_url} width="80" className="image-searchresult"/>
                          </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </Router>
    )

}

export default SearchResult