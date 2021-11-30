import Layout from "../components/layout"
import Card from "../components/card"
import styles from "../styles/project.module.css"

export default function Projects() {
    return (
        <Layout>
            <p>Projects</p>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Card name="Project 1" />
                    <Card name="Project 1" />
                </div>

                <div className={styles.column}>
                    <Card name="Project 3" />
                    <Card name="Project 4" />
                </div>
            </div>
        </Layout>
    );
}