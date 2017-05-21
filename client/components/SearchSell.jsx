import React from 'react'
import {BrowserRouter,Link, Route} from 'react-router-dom'

class SearchSell extends React.Component {
    state = {
        dbResult: []
    }

    componentDidMount(){    
        fetch('/api/searchsell')
        .then(response => response.json())
        .then(result => this.setState({dbResult: result}))
    }
    render() {
        const {dbResult} = this.State
    }
}

export default SearchSell