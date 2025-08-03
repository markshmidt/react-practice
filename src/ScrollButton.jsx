
import React, {useState, useEffect} from 'react'

function ScrollButton(){
    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        const handleScroll= ()=>{
        
            if (window.scrollY>100){
                setShowButton(true)
            }else{
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
}, [])
    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return(
        <div className="scrollbtn">
            {showButton&& <button className="scroll" onClick={scrollUp}>Scroll to top</button>}
        </div>

    )
}
export default ScrollButton