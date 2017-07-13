import { combineReducers } from 'redux'
import ArticleReducer from './article-reducer'
import ContactReducer from './contact-reducer'

const Reducer = combineReducers({
  ArticleReducer,
  ContactReducer
})

export default Reducer