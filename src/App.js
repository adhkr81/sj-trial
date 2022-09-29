import { useState } from "react"

import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"

import styles from "./styles.module.css"

function App() {

  let filledArray = Array.from({length: 20}, (_, i) => i + 1)

  const [ card, setCard ] = useState(filledArray)


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

  
  return (
    <div className="App">
        <Navbar />
        <Sidebar setCard={setCard} 
            filledArray={filledArray} 
            handleAscend={handleAscend}
            handleDescend={handleDescend}
            handleRandom={handleRandom}/>
        <Content card={card}/>
    </div>
  );
}

export default App;
