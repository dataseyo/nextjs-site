import Layout from "../components/layout"
import Card from "../components/card"

export default function Projects() {
    return (
        <Layout>
            <div>
                <p>Projects</p>
                <Card name="Project 1" />
                <Card name="Project 2" />
                <Card name="Project 3" />
                <Card name="Project 4" />
            </div>
        </Layout>
    );
}