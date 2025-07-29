import React, {useState} from 'react'

function Modal(){

    const [isHidden, setIsHidden] = useState(true)
    function handleModal(){
        if (isHidden){
            setIsHidden(false)
        }else{
            setIsHidden(true)
        }
        

    }

    return(
        <div className='modalComponent' onClick={handleModal}>
            <h1>Modal component</h1>
            <p className='modalOutline'>Click here to open more info.</p>
            <p className="modalHidden"> {isHidden && "This is hidden text. Click outside of modal component to close it."}</p>
            </div>
    )
}
export default Modal;