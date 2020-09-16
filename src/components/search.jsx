import React, {Component} from "react";

class Search extends Component{

    // constructor(props){
    //      super(props);
         
    // }

    render(){
        return(
            <div className = "row">
            <div className = "col-md-8">
            <form>
            <div className = "form-group">
            <input type = "text" className = "form-control"
            onChange = {this.props.InputData}
            
             placeholder = {this.props.placeholder} />
            </div>
            </form>
            </div>
            </div>

        )
    }
}

export default Search;