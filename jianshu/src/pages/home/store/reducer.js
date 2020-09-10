import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
   topicList: [],
   articleList: [],
   articlePage: 1
})

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            })
            //state.set('topicList', fromJS(action.topicList))
        case constants.ADD_HOME_DATA:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
            //return state.set('articleList', state.get('articleList').concat(action.list))
        default:
            return state
    }
}