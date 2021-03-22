import Head from 'next/head'

export default function Dash() {
    return(
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            
            <header>
                <a href="#">Seja Premium</a>
                <div>
                    <img />
                    <strong>Gustavo Lázaro</strong>
                    <i />
                </div>
            </header>

            <main>
                <aside>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Planejamento</a></li>
                    <li><a href="#">Temporizador</a></li>
                    <li><a href="#">Meu perfil</a></li>
                </ul>
                </aside>

                <div>
                    <strong>Bom dia, Gustavo</strong>

                    <div>
                        <strong>O que teremos nesta semana:</strong>
                        <div>
                            <strong>Biofísica</strong>
                            <span>Amanhã - Segunda-Feira</span>
                            <p>Início às 9h:</p>
                            <ul>
                                <li>50min de aula</li>
                                <li>10min - musicoterapia, injestão de alimentos</li>
                                <li>50min de aula - socrative</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <strong>O que teremos nesta semana:</strong>
                        <div>
                            <strong>Biofísica</strong>
                            <span>Amanhã - Segunda-Feira</span>
                            <p>Início às 9h:</p>
                            <ul>
                                <li>50min de aula</li>
                                <li>10min - musicoterapia, injestão de alimentos</li>
                                <li>50min de aula - socrative</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <strong>Suas disciplinas:</strong>

                        <div>
                            <span>Biofísica</span>
                            <span>Biofísica</span>

                            <i />
                        </div>
            
                    </div>
                </div>
            </main>

        </div>
    )
}