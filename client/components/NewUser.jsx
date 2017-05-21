import React from 'react'

function NewUser (props) {
    return (
        <form action="/newuser" method="POST" className="form">
            <input type="text" placeholder="User Name" name="user_name"/>
            <input type="text" placeholder="First Name" name="first_name"/>
            <input type="text" placeholder="Last Name" name="last_name"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <input type="submit" value="Join Now"/>
        </form>
    )
}
export default NewUser