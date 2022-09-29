import styles from "./styles.module.css"

export function Menu ({setCard, filledArray, handleAscend, handleDescend, handleRandom}) {


    return (
        <div className={styles.container}>
            <button className={styles.buttons} onClick={handleAscend}>Ascending Order</button>
            <button className={styles.buttons} onClick={handleDescend}>Descending Order</button>
            <button className={styles.buttons} onClick={handleRandom}>Random Order</button>
        </div>
    )
}