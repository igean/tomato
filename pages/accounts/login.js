import Head from "next/head";

import styles from "../../styles/Home.module.css";
import LoginBody from "../components/LoginBody";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fazer login</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <LoginBody />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
