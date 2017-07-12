import { combineReducers, createStore } from 'redux';

import ArticleReducer from './article-reducer';
import ContactReducer from './contact-reducer';

const reducers = combineReducers({
    article: ArticleReducer,
    contact: ContactReducer,
})

const store = createStore(reducers);
export default store;