import styles from "./styles.module.css"
import menu from "../../assets/images/menu.png"
import profile from "../../assets/images/profile.png"

export function Navbar () {


    return (
        <div className={styles.nav}>
            <div><img src={menu} className={styles.icon}/></div>
            <div className={styles.textDiv}>App Name</div>
            <div><img src={profile} className={styles.img}/></div>
        </div>
    )
}