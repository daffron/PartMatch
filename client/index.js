
import React from 'react'
import ReactDOM from 'react-dom'
import SearchResult from './components/SearchResult'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SearchResult />,
    document.getElementById('searchresult')
  )
})