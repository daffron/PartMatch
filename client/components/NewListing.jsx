import React from 'react'

function NewListing (props) {
    return (

         <form action="/newlisting" method="POST">
            <input type="hidden" value="browser_id" name="user_id"/>
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Category" name="listing_category"/>
            <input type="currency" placeholder="Price" name="price"/>
            <input type="text" placeholder="City" name="location"/>
            <input type="text" name="keywords" placeholder="keywords"/>
            <input type="text" name="description" placeholder="description"/>
            <input type="submit" value="Post your Listing"/>
        </form>
    )
}

export default NewListing