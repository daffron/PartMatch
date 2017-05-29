import React from 'react'

class ProfileListing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sellingAds: []
    }
  }
 componentDidMount(){
   console.log(this.props.sellingAds)
   this.setState({
     sellingAds: this.props.sellingAds
   })
 }

 render(){
    return (
        <div>
            <h2>Your current Listings</h2>
         {this.props.sellingAds.map(((item, key) => {
             return(
                    <ul key= {key}>
                        <li >{item.title}</li>
                        <li>${item.price}</li>
                        <li><button  onClick={() => {this.props.handleClick(item._id)}}>Delete</button></li>
                    </ul>
             )
                    }))}
    </div>
    )
  }
}

export default ProfileListing