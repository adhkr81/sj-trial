import styles from "./styles.css"
import close from "../../assets/images/close.png"

export function Sidebar ({handleAscend, handleDescend, handleRandom, handleSlide, slide}) {



    return (
        <aside>
            <div id={"ahhh"} className={slide ? "container" : "container container-open"}>
                <button className={"btn"} onClick={handleSlide}>    
                    <img src={close} className={slide ? "closeIcon" : "closeIcon closeIcon-open"}/>
                </button>            
                <button className={slide? "buttons" : "buttons buttons-open"} onClick={handleAscend}>Ascending Order</button>
                <button className={slide? "buttons" : "buttons buttons-open"} onClick={handleDescend}>Descending Order</button>
                <button className={slide? "buttons" : "buttons buttons-open"} onClick={handleRandom}>Random Order</button>
            </div>
        </aside>
    )
}