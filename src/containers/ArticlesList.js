import { connect } from 'react-redux'
import Articles from '../components/articles'

const getAll = (list) => {
    return list;
}

const mapStateToProps = state => {
    return {
        list: getAll(state.list)
    }
}

const List = connect(
    mapStateToProps
)(Articles)

export default getAll