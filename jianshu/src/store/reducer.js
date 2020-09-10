import { combineReducers } from 'redux-immutable'
import { reducer as headerRecuder } from '../common/header/store'
import { reducer as homeRecuder } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
const reducer = combineReducers({
    header: headerRecuder,
    home: homeRecuder,
    detail: detailReducer,
})

export default reducer