import React from 'react'


function SearchResult (props) {
    console.log(props)
    return (
        <div className="searchresults row">
            <h1>Search Results for {props.searchTerm}</h1>
            {props.searchresult.map((item,key) => {
                return(
                <div key={key} className="single-result col-xs-2">
                    <h3>{props.wantorsell}</h3>
                    <h3 >{item.title}</h3>
                    <h5>${item.price}</h5>
                    <button>View</button>
                </div>
                )
            })}
        </div>
    )

}

export default SearchResult