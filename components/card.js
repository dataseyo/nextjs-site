import styles from "./card.module.css"

export default function Card(props) {
    // cards to display and link to projects

    return(
        <div className={styles.container}>
            <img>
            </img>

            <p>{props.name}</p>

            <button>Link</button>

        </div>
    );
}