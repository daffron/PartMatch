import React from 'react'

function NewListing (props) {
    return (

         <form action="/newlisting" method="POST">
            <input type="hidden" value="browser_id"/>
            <input type="text" placeholder="Title" name="listing_title"/>
            <input type="text" placeholder="Category" name="listing_category"/>
            <input type="currency" placeholder="Price" name="price"/>
            <input type="text" placerholder="City" name="location"/>
            <input type="submit" value="Post your Listing"/>
        </form>
    )
}

export default NewListing