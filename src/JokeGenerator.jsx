import React, {useState, useEffect, useRef} from 'react'

function JokeGenerator(){

    const [joke, setJoke] = useState('');
    const [punchline, setPunchline] = useState('');
    const[showPunchline, setShowPunchline] = useState(false)
     const timerRef = useRef(null);

    async function fetchJoke(){
        if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
        try{
            const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            const [data]= await response.json()
            console.log(data)
            setShowPunchline(false)
            setJoke(data.setup)
            setPunchline(data.punchline);
            timerRef.current = setTimeout(() => {
                setShowPunchline(true);
                timerRef.current = null;
            }, 3000);
            
        }catch (error) {
            console.error("Error fetching quote:", error);
          }
           }
             useEffect(() => {
            fetchJoke();
            return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
          }}, []);
    

    return(
        <div className='jokeGenerator'>
            <h1>Joke Generator</h1>
            <p className='jokeContent'>{joke}</p>
            {showPunchline && <p className='jokePunchline'>{punchline}</p>}
            <button className='fetchJokeBtn' onClick={fetchJoke}>Tell another joke</button>
            </div>

    )
}
export default JokeGenerator