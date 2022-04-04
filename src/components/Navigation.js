import React, {useState, useEffect} from 'react'

export default function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);
  const [navBarOpen, setNavBarOpen] = useState(false)

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const handleClick=()=>{
    setNavBarOpen(prev => !prev)
  }
  
  const isMobile = width <= 768;

  if(isMobile){
    return (
      <>
      <div id="borgorContainer">
        <div><img src="https://i.imgur.com/G2L1Lsf.png" id="borgorMenuBtn" onClick={()=>handleClick()}></img>{
        navBarOpen ?
         <div id="navBarContainer">
           <div id="xButtonContainer">
            <img src="https://i.imgur.com/TPKbg2m.png" id="navBarXButton" onClick={()=>handleClick()}></img>
          </div>

            <nav id="navigationContainer">
              <div><a class="navLink" href="#">Home</a></div>
              <div><a class="navLink" href="#aboutMe">About</a></div>
              <div><a class="navLink" href="#projects">Projects</a></div>
              <div><a class="navLink" href="#contact">Contact</a></div>
            </nav>
         </div> 

         : 
         ""
         
         }</div>
      </div>
      </>
    )
  }
  


  return (
    <div id="navContainer">
        <nav id="navLinksContainer">
           
            <div><a class="navLink" href="#">Home</a></div>
            <div><a class="navLink" href="#aboutMe">About</a></div>
            <div><a class="navLink" href="#projects">Projects</a></div>
            <div><a class="navLink" href="#contact">Contact</a></div>

        </nav>
    </div>
  )
}
