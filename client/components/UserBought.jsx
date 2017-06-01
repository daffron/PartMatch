import React from 'react'
import {Route, Link} from 'react-router-dom'
let thisProps
function UserBought (props) {
  console.log(props)
  thisProps = props
  return(
    <ul>
      {props.listings.map(((item,key) => {
        return (
          <li key={key}>{item.title}<button onClick={() => {saveToStorage(item)}}>View</button></li>
        )
      }))}
    </ul>
  )
}
function saveToStorage(item){
  console.log(thisProps)
  localStorage.clear('userBoughtObj')
  localStorage.setItem('userBoughtObj', JSON.stringify(item))
  thisProps.props.history.push('/soldlisting/')
}


export default UserBought