import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () =>{

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 700 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="goTop">
      <FaArrowCircleUp size={70} onClick={scrollToTop}
      style={{display: visible ? 'inline' : 'none',
      cursor: visible ? 'pointer' : 'default'}}
      title="Scroll to top"/>
    </button>
  );
}

export default ScrollButton;