import Dispatcher from '../dispatchers/articles-dispatcher'

import ActionTypes from './article-action-types'

export function createArticle(title, article){
    Dispatcher.dispatch({
        type: ActionTypes.CREATE_ARTICLE,
        title,
        article
    })
}

export function deleteArticle(id){
    Dispatcher.dispatch({
        type: ActionTypes.DELETE_ARTICLE,
        id
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