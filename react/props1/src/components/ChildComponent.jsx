import React from "react";

const ChildComponent =(props) => {
     const style1= {
        color:red,
        fontSize:'40px',
        
    }
    return <u style={style1}>{props.greeting}</u>
};

export default ChildComponent;
