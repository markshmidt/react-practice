import React, { useState } from 'react';
function Toggle() {

    const [visible, setVisible] = useState(true);

    function toggleText(){
        setVisible(!visible);
        console.log("Toggle button clicked. Current visibility:", visible);
        console.log("Text visibility changed to:", !visible);
    }
    return(
        <div className="toggle">
            <h1> Toggle part</h1>
            {visible && <p className="text">Text to hide/show. </p>}
            <button className="toggleButton" onClick={toggleText}>Hide/Show</button>
        </div>
    )
}
export default Toggle;