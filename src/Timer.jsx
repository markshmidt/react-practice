import React, { useState, useEffect, useRef } from 'react';
function Timer(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
           intervalIdRef.current= setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current); 
             }, 10);
        }
        return ()=>{
            clearInterval(intervalIdRef.current);
            console.log("Timer stopped. Elapsed time:", elapsedTime);
        }
    }, [isRunning])

    function start(){
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now()-elapsedTime;
            console.log("Timer started at:", startTimeRef.current);
            

        }
    }
    function stop(){
        if (isRunning) {
            setIsRunning(false);
            startTimeRef.current = Date.now()+elapsedTime;
            console.log("Timer finished at:", startTimeRef.current);
            

        }
    
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return `${hours}:${minutes}:${seconds}:${milliseconds}`; 
    }
    
    return(
        <div className="timer">
            <h1>Timer Component</h1>
            <div className="time-display">
                {formatTime()}
                </div>
            <div className="controls">
                <button className="startButton" onClick={start} disabled={isRunning}>Start</button>
                <button className="stopButton" onClick={stop} disabled={!isRunning}>Stop</button>
                <button className="resetButton" onClick={reset}>Reset</button>
                 
            </div>
        </div>
    )
}
export default Timer;