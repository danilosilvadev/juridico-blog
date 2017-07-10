import { EventEmitter } from "events";

import Dispatcher from "../dispatchers/articles-dispatcher";

import ActionTypes from '../actions/article-action-types'

import Counter from '../utils/counter'

class ArticleStore extends EventEmitter {
    constructor() {
        super();
        this.article = {
            id: '',
            title: '',
            content: ''
        }
    }

    handleActions(action) {
        switch (action) {
            case ActionTypes.CREATE_ARTICLE:
                this.setState.article.id = Counter.increment;
                this.setState.article.title = action.title;
                this.setState.article.content = action.content;
                console.log("adicionado")
                break;
            case ActionTypes.DELETE_ARTICLE:
                console.log("deletando")
                break;
            case ActionTypes.EDIT_ARTICLE:
                console.log("editando")
                break;
        }
    }
}

const articleStore = new ArticleStore();
Dispatcher.register(articleStore.handleActions.bind(articleStore));
window.Dispatcher = Dispatcher;
export default articleStore