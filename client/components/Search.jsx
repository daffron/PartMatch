import React from 'react'
import {BrowserRouter,Link, Route} from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            errorMsg: null,
            searchTerm: '',
            searchCategory: 'searchsell'
        }
    }
    
    
    handleSubmit (evt) {
        const term = this.state.searchTerm
        const category = this.state.searchCategory
        evt.preventDefault()
        this.props.searchFunc(term, category)
    }

    handleChange(evt){
        this.setState({         
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        return (
            <div>
                 <form className="navbar-form" role="search" onSubmit={this.handleSubmit.bind(this)}>
            <select name="searchCategory" onChange={this.handleChange.bind(this)}>
                <option value="searchsell">For Sale</option>
                <option value="searchwanted">Wanted</option>
            </select>
            
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" name="searchTerm" onChange={this.handleChange.bind(this)}/>
            <div className="input-group-btn">
               <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
            </div>
        )
    }

}
export default Search