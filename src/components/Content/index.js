import styles from "./styles.module.css"

export function Content({card}) {

    function GetCards() {
        return card.map((current) => <div key={current} className={styles.card}>{current}</div>)
    }

    return (
        <div className={styles.container}>
            <GetCards />
        </div>
    )
}