import React from 'react'

function ProfileListing (props) {
 
    return (
        <div>
            <h2>Your current Listings</h2>
         {props.sellingAds.map(((item, key) => {
             return(
                    <ul key= {key}>
                        <li >{item.title}</li>
                        <li>${item.price}</li>
                        <li><button  onClick={() => {props.handleClick(item._id)}}>Delete</button></li>
                    </ul>
             )
                    }))}
    </div>
    )
}

export default ProfileListing