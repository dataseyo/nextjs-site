import Layout from "../components/layout"
import Styles from "../styles/project.module.css"
import PrettyCard from "../components/prettycard"

export default function Projects() {
    return (
        <Layout>
                <div className={Styles.container}>
                    <PrettyCard name="Project 1" details="details here"/>
                    <PrettyCard name="Project 2" details="details here"/>
                    <PrettyCard name="Project 3" details="details here"/>
                </div>
        </Layout>
    );
}
