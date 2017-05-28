import React from 'react'

function NewListing (props) {
    return (

         <form action="/api/newlisting" method="POST">
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Category" name="listing_category"/>
            <input type="currency" placeholder="Price" name="price"/>
            <input type="text" placeholder="City" name="location"/>
            <input type="text" name="keywords" placeholder="keywords"/>
            <input type="text" name="description" placeholder="description"/>
            <input type="number" name="user_id" placeholder="user id"/>
            <input type="submit" value="Post your Listing"/>
        </form>
    )
}

export default NewListing