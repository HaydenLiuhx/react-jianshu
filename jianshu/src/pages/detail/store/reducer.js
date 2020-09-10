import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    title: 'Lorem Ipsum',
    content: '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>',

})

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}