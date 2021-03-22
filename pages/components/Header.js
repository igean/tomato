import styles from "../../styles/Header.module.css";

export default function Header() {
    return(
        <header className={styles.header}>
            <img id={styles.img} src="/logo.png" />
        </header>
    );
}