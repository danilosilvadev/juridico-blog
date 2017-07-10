import Dispatcher from '../dispatchers/articles-dispatcher'

import ActionTypes from './article-action-types'

export function createArticle(id, title, article){
    Dispatcher.dispatch({
        type: ActionTypes.CREATE_ARTICLE,
        id,
        title,
        article
    })
}

export function deleteArticle(id, title, article){
    Dispatcher.dispatch({
        type: ActionTypes.DELETE_ARTICLE,
        id,
        title,
        article
    })
}

export function editArticle(id, title, article){
    Dispatcher.dispatch({
        type: ActionTypes.EDIT_ARTICLE,
        id,
        title,
        article
    })
}