import React from 'react'

const data = localStorage.getItem('userBoughtObj')
let parsedData = JSON.parse(data)

// if (data) parsedData = JSON.parse(data)
console.log(data)

function ViewSold (props) {
  const listing = parsedData

  console.log(parsedData.title)
  return (
       <div className="listing row">
          <div className="col-sm-4">
              <img src={listing.image_url} width="350"/>
          </div>
          <div className="col-sm-8">
          <h1>{listing.title}</h1>
          <hr/>
          <ul>
              <li>Price: ${listing.price}</li>
              <hr/>
              <li>{listing.description}</li>
              <hr/>
              <li>This item is located in {listing.location}</li>
              <hr/>
              
          </ul> 

      </div>
    </div>
  )
}

export default ViewSold