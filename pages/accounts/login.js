import Head from "next/head";

import styles from "../../styles/Home.module.css";
import Header from "../components/Header";
import LoginBody from "../components/LoginBody";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato - Mental Health</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <main className={styles.main}>
        <LoginBody />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
