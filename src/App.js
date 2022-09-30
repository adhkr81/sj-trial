import { useEffect, useState } from "react"
import useWindowSize from "./utils/useWindowSize"

import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Backdrop } from "./components/Backdrop"

import styles from "./styles.module.css"

function App() {

  const filledArray = Array.from({length: 21}, (_, i) => i + 1)

  const [ card, setCard ] = useState(filledArray)

  const [ slide, setSlide ] = useState(false)

  const [ currentPage, setCurrentPage ] = useState(1)
 
  const { width } = useWindowSize()

    //INFINITE SCROLL
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        console.log(entries)
  
        if(entries.some((entry) => entry.isIntersecting)) {
          console.log("element is visible")
          setCurrentPage(currentPage + 1)
          setCard([...card, ...filledArray])
        }})
  
      intersectionObserver.observe(document.querySelector("#observer"))
  
      return () => intersectionObserver.disconnect()
    }, [currentPage])


  useEffect(() => {
      if (width > 1023) {
        setSlide(true)
    }
  },[])

  useEffect(() => {
    if (width < 1023) {
      setSlide(false)
  }
},[width])


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
                 slide={slide}
                 currentPage={currentPage}/>

        {backDrop}

        <Content card={card}/>

        <div id={"observer"} style={{backgroundColor: "red", height: "20px", marginTop: "30px"}}></div>
    </div>
  );
}

export default App;
