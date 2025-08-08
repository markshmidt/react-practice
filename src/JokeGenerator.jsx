import React, {useState, useEffect} from 'react'

function JokeGenerator(){

    const [joke, setJoke] = useState('');
    const [punchline, setPunchline] = useState('');
    const[showPunchline, setShowPunchline] = useState(false)

    async function fetchJoke(){
        try{
            const response = await fetch('https://official-joke-api.appspot.com/random_joke')
            const data = await response.json()
            console.log(data)
            setJoke(data.setup)
            setPunchline(data.punchline);
            setTimeout(() => {
                setShowPunchline(true); 
             }, 3000);
            
        }catch (error) {
            console.error("Error fetching quote:", error);
          }
           }
             useEffect(() => {
            fetchJoke();
          }, []);
    

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