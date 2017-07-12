import ActionTypes from '../actions/article-action-types'
import Action from '../actions/article-actions'
import Counter from '../utils/counter'


const ArticleReducer = (state = { id: "", title: "", content: "" }, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ARTICLE: {
            state = { ...state, id: Counter.increment, title: action.title, content: action.content }
            var articles = articles.unshift({ id: Counter.increment, title: action.title, content: action.content, list: [{}] });

        }
        case ActionTypes.DELETE_ARTICLE: {
            state = { ...state, id: "", title: "", content: "" }
            break;
        }
        default:
            return state;
    }

}

function getAll() {
    return ArticleReducer.articles.list;
}

export default ArticleReducer