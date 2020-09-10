import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import bgPic from '../../static/bg.jpg'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Home extends Component {
    componentDidMount = () => {
        this.props.changeHomeData()
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="" src={bgPic}></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapDispactchToProps = (dispatch) => ({
    changeHomeData: () => {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
})
export default connect(null, mapDispactchToProps)(Home);