import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList
})
const addHomeData = (list, nextPage) => ({
    type: constants.ADD_HOME_DATA,
    list: fromJS(list),
    nextPage
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
           dispatch(changeHomeData(result))
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeMoreList.json?page='+page).then((res) => {
            const result = res.data.data
           dispatch(addHomeData(result, page+1))
        })
    }
}
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_TOP_SHOW,
    show
})