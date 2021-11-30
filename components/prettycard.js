import styles from "./prettycard.module.css"

export default function PrettyCard(props) {
    return( 
            <div className={styles.card}>
                <div className={styles.cardimage}></div>
                <h2>{props.name}</h2>
                <p>{props.details}</p>
            </div>
    );
}