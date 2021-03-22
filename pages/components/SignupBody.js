import styles from "../../styles/SignupBody.module.css"

export default function LoginBody() {
    return (
        <div class={styles.signupContainer}>

            <div
                className={styles.signupImgContainer}
            />

            <div className={styles.formContainer}>
                <strong>Sou Professor</strong>
                <form>
                    <label>
                        Nome Completo:
                    <input type="text" />
                    </label>

                    <label>
                        Email:
                    <input type="email" />
                    </label>

                    <label>
                        Telefone:
                    <input type="text" />
                    </label>

                    <label>
                        Linkedin:
                    <input type="text" />
                    </label>

                    <label>
                        UF:
                    <input type="text" />
                    </label>

                    <label>
                        Cidade:
                    <input type="text" />
                    </label>

                    <button><a href="/user/dash">Entrar</a></button>
                </form>
            </div>

        </div>
    );
}