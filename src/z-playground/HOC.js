import React from 'react';
import ReactDOM from "react-dom";

const Info=(props)=>(
    <div>
      <h1> Info Component  </h1>
      <h3> the info is ::::: {props.info} </h3>
    </div>
)

// const HOC=(Wrapper)=>{ 
//     return (props)=>(
//         <div>
//           { props.isAdmin &&  <h4> these is a private message please dont share with anyone </h4>}
//           <Wrapper {...props} />
//         </div>
//     )
// }

// const AdminInfo=HOC(Info);

const HighOrderComponent=(Wrapper)=>{
    return (props)=>(
        <div>
          {props.isAuth ? (<div> <p>these is admin messgae please dont share with anyine </p> <Wrapper {...props}/> </div>) : "please login to see the message" }
        </div>
    )
}

const RequireAuthenticaion=HighOrderComponent(Info)
ReactDOM.render(<RequireAuthenticaion isAuth={false} info={"my private messgae"} />, document.getElementById("app"));