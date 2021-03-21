import styles from "../../styles/Header.module.css";

export function Header() {
    return(
        <header className={styles.header}>
            <img src="/logo.svg" />
        </header>
    );
}