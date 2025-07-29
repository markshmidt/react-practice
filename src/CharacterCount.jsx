import React, {useState} from 'react'

function CharacterCount(){
    const [text, setText] = useState('');

    return(
        <div className="characterCount">
            <h1> Character Count Field</h1>
            <p className="textLeft"
            style={{
                color: 20-text.length>10  ? "grey" : "red",
            }}
            >{text.length < 20 ? `You have ${20 - text.length} characters left.` : "Character limit exceeded. You cannot submit your message"}</p>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your text'></textarea>
            <button disabled={text.length > 20 || text.length === 0} onClick={() => setText('')}>Submit</button>
        </div>
    )
}
export default CharacterCount;