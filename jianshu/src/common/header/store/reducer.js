import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
})

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        //immutable对象的set方法会结合之前的imuutable对象的值,返回一个新的对象
        return state.set('focused', true)
        // {
        //     focused: true
        // }
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
        // return {
        //     focused: false
        // }
    }
    return state;
}