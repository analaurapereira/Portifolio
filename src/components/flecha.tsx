import {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { Button } from '../styles/flecha'; 

export const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 20){ 
      setVisible(true) 
    }  
    else if (scrolled <= 20){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
     <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
}  