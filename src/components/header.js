import React from 'react';
import logo from "../assests/logo2.webp"


class  Header   extends React.Component{
    render (){
        return (
            <div className="d-flex justify-content-between navbar">
            
            <div><img src={logo} height="100px" ></img></div>
            <div className="navbar-title">Pheonix</div>
            </div>

        )
    
}}


export default Header



// import React from 'react';


// class  Header   extends React.Component{
//     render (){
//         return (
//             <div>hello</div>
//         )
//     }
// }


// export default Header