import React, {useState, useRef, useEffect} from 'react'

function Modal(){

    const [isHidden, setIsHidden] = useState(false)
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsHidden(true);
            }
    }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleModal(){
        setIsHidden(false)
        

    }

    return(
        <div className='modalComponent'ref={modalRef} onClick={handleModal}>
            <h1>Modal component</h1>
            <p className='modalOutline'>Click here to open more info.</p>
            { !isHidden && (
        <p className="modalHidden">
          This is hidden text. Click outside of modal component to close it.
        </p>)} </div>
    )
}
export default Modal;