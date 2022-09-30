import styles from "./styles.module.css"
import menu from "../../assets/images/menu.png"
import profile from "../../assets/images/profile.png"

export function Navbar ({handleSlide, currentPage}) {

    return (
            <div className={styles.nav}>
                    <button className={styles.btn} onClick={handleSlide}>
                        <img src={menu} className={styles.icon}/>
                    </button>

                    <div className={styles.textDiv}>App Name</div>
                    
                    <div><img src={profile} className={styles.img}/></div>
            </div>
    )
}