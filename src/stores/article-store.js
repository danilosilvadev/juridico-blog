import { EventEmitter } from "events";

class ArticleStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [
            {
                id: 154658975,
                title: "E lá vamos nós",
                text: ` Físicos - 
                        1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert
                        `
            },
            {
                id: 4578954,
                title: "E lá vamos nós 2",
                text: ` Físicos - 
                        1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert
                        `
            },
            {
                id: 154658975,
                title: "E lá vamos nós 3",
                text: ` Físicos - 
                        1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert
                        `
            }
        ];
    }

    getAll() {
        return this.articles;
    }

}

const articleStore = new ArticleStore;

export default articleStore