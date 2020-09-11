import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    login: false,
})

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value)
        case constants.LOGOUT:
            return state.set('login', action.value)
        default:
            return state
    }
}