import Store from '../stores/store'
import ActionTypes from './article-action-types'

Store.dispatch({type: ActionTypes.CREATE_ARTICLE, action: [{ title:'', content:'' }]});
Store.dispatch({type: ActionTypes.DELETE_ARTICLE, action: [{ id:'' }]});
Store.dispatch({type: ActionTypes.EDIT_ARTICLE, action: [{ id:'', title:'', content:'' }]});