import Store from '../index'
import ActionTypes from './article-action-types'

/*Store.dispatch({type: ActionTypes.CREATE_ARTICLE, action: [{ title:'', content:'' }]});
Store.dispatch({type: ActionTypes.DELETE_ARTICLE, action: [{ id:'' }]});
Store.dispatch({type: ActionTypes.EDIT_ARTICLE, action: [{ id:'', title:'', content:'' }]});*/

export const createArticle = (title, content) => {
  return {
    type: ActionTypes.CREATE_ARTICLE,
    title,
    content
  }
}

export const deleteArticle = id => {
  return {
    type: ActionTypes.DELETE_ARTICLE,
    id
  }
}

export const editArticle = id => {
  return {
    type: ActionTypes.EDIT_ARTICLE,
    title,
    content
  }
}