//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
let i=0;
//render your react application
setInterval(() => {
    
ReactDOM.render(<SecondsCounter segundos={i} />, document.querySelector("#app"));
 i++}, 1000);
