import React, {useState} from 'react'
function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF')
    function handleColorChange(event){
        setColor(event.target.value);
        console.log("Color changed to:", event.target.value);
    }
    return(
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className='color-display' style={{ backgroundColor: color }}>
                <p className="selectedColor">Selected color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}
export default ColorPicker;