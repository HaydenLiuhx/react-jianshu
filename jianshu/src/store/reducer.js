const defaultState = {
    focused: false,
}

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state;
}