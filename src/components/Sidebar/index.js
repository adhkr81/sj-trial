import styles from "./styles.module.css"
import close from "../../assets/images/close.png"

export function Sidebar ({handleAscend, handleDescend, handleRandom, handleSlide}) {



    return (
        <aside>
            <div className={styles.container}>
                <button className={styles.btn} onClick={handleSlide}>    
                    <img src={close} className={styles.closeIcon}/>
                </button>            
                <button className={styles.buttons} onClick={handleAscend}>Ascending Order</button>
                <button className={styles.buttons} onClick={handleDescend}>Descending Order</button>
                <button className={styles.buttons} onClick={handleRandom}>Random Order</button>
            </div>
        </aside>
    )
}