import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import bgPic from '../../static/bg.jpg'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Home extends PureComponent {
    componentDidMount = () => {
        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
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
                {this.props.showScroll ? <BackTop onClick={()=>window.scrollTo(0,0)}>Back To Top</BackTop> : null}
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispactchToProps = (dispatch) => ({
    changeHomeData: () => {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow: () => {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapStateToProps, mapDispactchToProps)(Home);