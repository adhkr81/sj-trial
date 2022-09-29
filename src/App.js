import { useEffect, useState } from "react"
import useWindowSize from "./utils/useWindowSize"

import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Backdrop } from "./components/Backdrop"

import styles from "./styles.module.css"

function App() {


  let filledArray = Array.from({length: 20}, (_, i) => i + 1)

  const [ card, setCard ] = useState(filledArray)

  const [ slide, setSlide ] = useState(false)
 
  const { width } = useWindowSize()



  useEffect(() => {
      if (width > 1023) {
        setSlide(true)

    }
  },[])


  function handleAscend() {
    setCard(filledArray)    
  }    

  function handleDescend() {
    const clone = [...filledArray]
    const reverseArray = clone.reverse()
    setCard(reverseArray)
  }

  function handleRandom() {
    const clone = [...filledArray]
    const shuffledArray = clone.sort((a, b) => 0.5 - Math.random())
    setCard(shuffledArray)
  }
  
  function handleSlide() {
    setSlide(!slide)
  }

  let backDrop;

  if (slide && width > 1023) {
    backDrop = null;
  } else if (slide) {
    backDrop = <Backdrop />
  }
  
  return (
    <div className="App">

        <Navbar handleSlide={handleSlide}
                slide={slide}/>

        <Sidebar handleAscend={handleAscend}
                 handleDescend={handleDescend}
                 handleRandom={handleRandom}
                 handleSlide={handleSlide}
                 slide={slide}/>

        {backDrop}

        <Content card={card}/>
    </div>
  );
}

export default App;
