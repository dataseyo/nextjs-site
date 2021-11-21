import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Zachary, a Philosopher of Physics turned software engineer. </p>
        <p>
          (site under development)
        </p>
      </section>
    </Layout>
  )
}