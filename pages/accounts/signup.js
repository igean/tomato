import Head from "next/head";

import styles from "../../styles/Home.module.css";
import SignupBody from "../components/SignupBody";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fazer login</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <SignupBody />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
