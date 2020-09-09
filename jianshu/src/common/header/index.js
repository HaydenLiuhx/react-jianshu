import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
    getListArea = (show) => {
        if (show) {
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        Popular Searches
                        <SearchInfoSwitch>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused?'focused':''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                            />
                        </CSSTransition>
                            <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe611;</i>
                            {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className='right'>Login</NavItem>
                </Nav>
                <Addition>
                    <Button className='reg'>Register</Button>
                    <Button className='writing'><i className="iconfont">&#xe71a;</i>Writing</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
//immutable data
const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        //focused: state.header.get('focused')
        //focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus: () => {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleBlur: () => {
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)