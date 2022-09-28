import styles from "./styles.module.css"

export function Content () {


    function CreateCards() {
        let filledArray = Array.from({length: 20}, (_, i) => i + 1)
        return filledArray.map((current) => <div className={styles.card}>{current}</div>)
    }

    return (
        <div className={styles.container}>
            <CreateCards />
        </div>
    )
}