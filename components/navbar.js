import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            
            <ul className={styles.navmenu}>
                <li className={styles.navitem}><Link href="/">Home</Link></li>
                <li className={styles.navitem}><Link href="/projects">Projects</Link></li>
                <li className={styles.navitem}><Link href="/fun">Fun</Link></li>
            </ul>
        </div>
    )
}