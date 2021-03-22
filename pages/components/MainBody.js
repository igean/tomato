import styles from "../../styles/MainBody.module.css";

export default function MainBody() {
    return (
        <div className={styles.bodyContainer}>
            <div>
                <h1 className={styles.mainTitle}>Tomato<br/>Mental Education</h1>
                <p className={styles.paragraph}>
                    Gerencie seu tempo de aula de maneira prática e cuide da sua saúde mental e emocional. Você nos diz seus horários e nós cuidamos do resto.
                </p>
                <button className={styles.loginButton}><a href="/accounts/login">Login</a></button>
                <button className={styles.signupButton}><a>Cadastre-se</a></button>
            </div>
            <div className={styles.imageContainer} />
        </div>
    );
}