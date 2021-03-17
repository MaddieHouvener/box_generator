import { waitForElement } from '@testing-library/react';
import React, { useState } from 'react';
import './boxColor.css'
    
const New = props => {
    return(
        <div style = {{display:"flex", flexWrap: "wrap"}}>{
            props.boxes.map( (val, idx) => 
                <div key={idx} className="box" style={{
                margin: '30px', 
                height: val.height+'px', 
                width: val.width+'px', 
                backgroundColor: val.color}}> 
                </div>
            )
        }</div>
    );
};


export default New;