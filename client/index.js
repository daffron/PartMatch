
import React from 'react'
import ReactDOM from 'react-dom'
import { makeMainRoutes } from './components/Routes';
import App from './components/App'

const routes = makeMainRoutes()

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    routes,
    document.getElementById('root')
  )
})

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <SearchResult />,
//     document.getElementById('searchresult')
//   )
// })