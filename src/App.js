import { useState } from "react"

import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Backdrop } from "./components/Backdrop"

import styles from "./styles.module.css"

function App() {

  let filledArray = Array.from({length: 20}, (_, i) => i + 1)

  const [ card, setCard ] = useState(filledArray)

  const [ slide, setSlide ] = useState(false)


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

  console.log(slide)

  let sideBar;
  let backDrop;

  if (slide) {
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
