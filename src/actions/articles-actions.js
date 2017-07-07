import Dispatcher from '../dispatchers/articles-dispatcher'

export function createArticle(id, title, article){
    Dispatcher.dispatch({
        type: CREATE_ARTICLE,
        id,
        title,
        article
    })
}

export function deleteArticle(id, title, article){
    Dispatcher.dispatch({
        type: DELETE_ARTICLE,
        id,
        title,
        article
    })
}

export function editArticle(id, title, article){
    Dispatcher.dispatch({
        type: EDIT_ARTICLE,
        id,
        title,
        article
    })
}