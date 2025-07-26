import React, { useState} from 'react';
function Theme(){
 const [theme, setTheme]= useState('light');


    function changeTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log("Theme changed to:", theme === 'light' ? 'dark' : 'light');
        
    }

    return (
        <div style={{
  backgroundColor: theme === "dark" ? "black" : "white",
  color: theme === "dark" ? "white" : "black"
}}className="theme-component">
    <h1 style={{
  backgroundColor: theme === "dark" ? "black" : "white",
  color: theme === "dark" ? "white" : "black"
}}>Theme Component</h1>
        <button className="themeButton" onClick={changeTheme}>Change Theme</button>
        <p className="themeText">Current theme: {theme === 'light' ? 'light' : 'dark'}</p>

        </div>
    )
}
export default Theme