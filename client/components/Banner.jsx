import React from 'react'
import Intro from './Intro'

function Banner (props) {
    return (
      <div>
          <div className="banner row">
            <h1 className="landing-title text-center">Sell & Find the right parts, from our trusted community</h1>
              <img src="./images/giphy.gif" className="bannerimage" height="400"/>

          </div>
          <Intro/>
        </div>
    )
}


export default Banner