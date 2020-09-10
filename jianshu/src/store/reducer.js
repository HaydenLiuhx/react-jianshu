import { combineReducers } from 'redux-immutable'
import { reducer as headerRecuder } from '../common/header/store'
import { reducer as homeRecuder } from '../pages/home/store'

const reducer = combineReducers({
    header: headerRecuder,
    home: homeRecuder,
})

export default reducer