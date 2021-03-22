import Head from "next/head";
import MainBody from "./components/MainBody";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato - Mental Education</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <main className={styles.main}>
        <MainBody />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
