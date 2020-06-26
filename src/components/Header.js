
import React, {Component} from "react"; 
import "../style/header.css"
export default class Header extends Component {

    render(){
        return(           
    <div className="card">
      <div clasNames="card-body">
        <h1>Employee Directory</h1>
        <p> Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </div>
      </div>
    
        )
    }
}
