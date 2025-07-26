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
            {visible ?  <button className="toggleButton" onClick={toggleText}>Hide</button>: <button className="toggleButton" onClick={toggleText}>Show</button>}

        </div>
    )
}
export default Toggle;