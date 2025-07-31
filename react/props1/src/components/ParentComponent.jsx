import React from "react";
import ChildComponent from "./ChildComponent";



const ParentComponent = () => {
    const message ="Hello from the Parent component!";
    
    return <ChildComponent  greeting = {message}/>;
}


export default ParentComponent;