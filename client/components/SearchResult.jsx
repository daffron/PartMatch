import React from 'react'

function SearchResult (props) {
console.log(props)

    return (

      <div className="searchresults row">
          <h1>Search Results for {props.searchTerm}</h1>
          {props.searchresult.map((item,key) => {
              return(
              <div key={item._id} className="single-result col-xs-2">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="corner-ribbon top-left sticky red shadow ">
                      <h3>{props.wantorsell}</h3>
                      </div>
                      <h3 >{item.title}</h3>
                      <h5>${item.price}</h5>
                      <button onClick={() => {
                          props.history.push(`/listing/${item._id}`)
                          props.viewListingClick()
                        }
                      }>View</button>
                    </div>
                    <div className="col-xs-6 imagepreviews">
                      <img src={item.image_url} width="80" className="image-searchresult"/>
                    </div>
                  </div>
              </div>
              )
          })}
      </div>

    )

}

export default SearchResult