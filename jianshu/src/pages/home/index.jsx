import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import bgPic from '../../static/bg.jpg'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
class Home extends Component {
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
export default Home;