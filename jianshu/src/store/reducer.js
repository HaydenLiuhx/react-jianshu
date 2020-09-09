import { combineReducers } from 'redux-immutable'
import { reducer as headerRecuder } from '../common/header/store'

const reducer = combineReducers({
    header: headerRecuder
})

export default reducer