import { useState } from "react"

import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Menu } from "./components/Menu"

import styles from "./styles.module.css"

function App() {

  let filledArray = Array.from({length: 20}, (_, i) => i + 1)

  const [ card, setCard ] = useState(filledArray)


  function handleAscend() {
    console.log(filledArray)
    setCard(filledArray)    
  }    

  function handleDescend() {
    const reverseArray = filledArray.reverse()
    console.log(reverseArray)
    setCard(reverseArray)
  }

  function handleRandom() {
    const clone = [...filledArray]
    const shuffledArray = clone.sort((a, b) => 0.5 - Math.random())
    console.log(shuffledArray)
    setCard(shuffledArray)
  }    

  
  return (
    <div className="App">
        <Navbar />
        <Menu setCard={setCard} 
            filledArray={filledArray} 
            handleAscend={handleAscend}
            handleDescend={handleDescend}
            handleRandom={handleRandom}/>
        <Content card={card}/>
    </div>
  );
}

export default App;
