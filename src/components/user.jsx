import React from "react";


const User = ({users})=>{

    return(
        <div className = "row">
        {
            users.map(data =>( // if using {}wrap below jsx code in return() 
                <div className = "col-md-3" key = {data.id} style = {{margin : "10px"}}>
                <div class="card text-left">
                  <img class="card-img-top" src={`https://i.pravatar.cc/150?img=${data.id}`} alt="" />
                  <div class="card-body">
                    <h4 class="card-title">{data.name}</h4>
                    <p class="card-text">{data.email}</p>
                  </div>
                </div>
                </div>
            ))
        }
        </div>
    )
}

export default User;