import { EventEmitter } from "events";

import Dispatcher from "../dispatchers/articles-dispatcher";

class ArticleStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [{
            id: '',
            title: '',
            content: ''
        }]
    }

    handleActions(action){
        console.log("Blog actions", action);
    }
}

const articleStore = new ArticleStore();
Dispatcher.register(articleStore.handleActions.bind(articleStore));
window.Dispatcher = Dispatcher;
export default articleStore