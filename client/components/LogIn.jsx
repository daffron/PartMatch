import React from 'react'

function LogIn (props) {
    return (
        <div className="login">
      
					<h1>Login to Your Account</h1><br/>
				  <form action="/login" method="POST" className="form">
					<input type="text" name="user" placeholder="Username"/>
					<input type="password" name="pass" placeholder="Password"/>
					<input type="submit" name="login" value="Login"/>
				  </form>
					
				  <div className="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
				  </div>
				</div>
			
    )
}

export default LogIn

