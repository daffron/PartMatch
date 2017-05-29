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
                    </ul>
             )
                    }))}
    </div>
    )
}

export default ProfileListing