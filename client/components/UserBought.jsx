import React from 'react'
import {Route, Link} from 'react-router-dom'

function UserBought (props) {
  return(
    <ul>
      {props.listings.map(((item,key) => {
        return (
          <li key={key}>{item.title}<Link to={`/soldlisting/${item._id}`}><button>View</button></Link></li>
        )
      }))}
    </ul>
  )
}

export default UserBought