import styles from "../../styles/LoginBody.module.css"

export default function LoginBody() {
    return (
        <div class={styles.loginContainer}>

            <div
                className={styles.loginImgContainer}
            />

            <div className={styles.formContainer}>
                <strong>Login</strong>
                <form>
                    <label>
                        Email:
                    <input type="email" />
                    </label>
                    <label>
                        Senha:
                    <input type="password" />
                    </label>

                    <button><a href="/user/dash">Entrar</a></button>
                </form>
            </div>

        </div>
    );
}