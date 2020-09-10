import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
   topicList: [],
   articleList: [],
   articlePage: 1,
   showScroll: false
})
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
    })
}
const articleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}
//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
            //state.set('topicList', fromJS(action.topicList))
        case constants.ADD_HOME_DATA:
            return articleList(state, action)
            //return state.set('articleList', state.get('articleList').concat(action.list))
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}