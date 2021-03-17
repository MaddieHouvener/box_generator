import React, { useState } from 'react';
import './boxColor.css'


const Display = props => {
    // const {inputs, setInputs} = props;
    // const [colors, setColors] = useState([{color:'pink'}, {color:'green'}, {color: 'blue'}])
    const [box, setBox] = useState([{}]);

    //logging each keystroke of user input
    //would need for every input (firstname, lastname, email)
    //[input we want to change    //function to change inputColor]
    const [inputColor, setInputColor] = useState("");
    const [inputHeight, setInputHeight] = useState("");
    const [inputWidth, setInputWidth] = useState("");

    //being used in form (could also directly put into form like this without setting variable)
    let newBoxColor = (e) => {
        setInputColor(e.target.value);
    }
    let newBoxHeight = (e) => {
        setInputHeight(e.target.value);
    }
    let newBoxWidth = (e) => {
        setInputWidth(e.target.value);
    }

    const createBox = (e) => {
        e.preventDefault(); //doesnt refresh the page
        console.log(inputColor)

        setBox([{ color: inputColor, height: inputHeight, width: inputWidth }]);
        props.newBoxForm(inputColor, inputHeight, inputWidth);
        setInputColor('')
        setInputHeight('150')
        setInputWidth('150')
    }

    return (
        <form onSubmit={createBox}>
            {/* {inputColor} */}
            <div className="form-group">
                <label htmlform="color">Color</label>
                <input value={inputColor} onChange={newBoxColor} type='text' />
                    Height<input value={inputHeight} onChange={newBoxHeight} type='text' />
                    Width<input value={inputWidth} onChange={newBoxWidth} type='text' />

                <input type="submit" value="Add" />
            </div>

            {/* {
                    colors.map((val, idx)) =>
                        <p key={idx} style= { {'color': val.color} }><div></div> </p>
                    )
                } */}
        </form>
    );
};

export default Display;