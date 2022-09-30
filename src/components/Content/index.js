import styles from "./styles.module.css"

export function Content({card}) {

    function GetCards() {
        return card.map((current) => <div className={styles.card}>{current}</div>)
    }

    return (
        <main className={styles.centralizer}>
            <div className={styles.container}>
                <GetCards />
            </div>
        </main>
    )
}