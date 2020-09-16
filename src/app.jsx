import React, {Component} from "react";
import Search from "./components/search";
import axios from "axios";
import User from "./components/user";

class App extends Component{

    constructor(props){
         super(props);
         this.state = {
             userData : [],
             inputData : ""
         }
    }

     async componentDidMount() {
         let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
         console.log(response);
         this.setState({userData : response.data})
     }

     HandleInputData = (event)=>{
            this.setState({inputData : event.target.value})
     }
    render(){
        let filterData = this.state.userData.filter(items => items.name.toLowerCase().includes(this.state.inputData.toLowerCase()))
        return(
            <div className = " container" style = {{"marginTop" : "20px"}}>
            <Search InputData = {this.HandleInputData}  placeholder = "search user" />
            <User users = {filterData} />
            </div>
        )
    }
}

export default App;