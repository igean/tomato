import styles from "../../styles/MainBody.module.css";

export function MainBody() {
    return (
        <div className={styles.bodyContainer}>
            <div>
                <h1 className={styles.mainTitle}>Mental Health</h1>
                <p className={styles.paragraph}>
                    Gerencie seu tempo de aula de maneira prática e cuide da sua saúde mental e emocional. Você nos diz seus horários e nós cuidamos do resto.
                </p>
                <button className={styles.loginButton}>Login</button>
                <button className={styles.signupButton}>Cadastre-se</button>
            </div>
            <div className={styles.imageContainer} />
        </div>
    );
}