import { EventEmitter } from "events";

class ArticleStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [
            {
                id: 1,
                title: "E lá vamos nós",
                content: ` Físicos - 
                        1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert
                        `
            },
            {
                id: 2,
                title: "E lá vamos nós 2",
                content: ` Físicos - 
                        1 Invisibilidade(mas só pra uma pessoa por vez.)
                        2 Congelar(Mas só superfícies pequenas do tamanho de uma latinha e vc fica sem poder usar por um dia).
                        Pirotecnia(Porém é só umas faíscas).
                        4 Cura(Mas se curar alguém perde o equivalente da própria vida, e n pode curar a si mesmo).
                        5 Acertar o alvo(Vc acert
                        `
            },
            {
                id: 3,
                title: "E lá vamos nós 3",
                content: ` Físicos - 
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

const articleStore = new ArticleStore();

export default articleStore