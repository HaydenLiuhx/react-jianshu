import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/login/store' 
class Header extends Component {
    getListArea = () => {
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props
        const pageList = []
        const newList = list.toJS()
        if (newList.length) {
            for (let i = (page-1)*10; i<page*10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return(
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        Popular Searches
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xebfe;</i>
                            Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused, handleFocus, handleBlur, list, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused?'focused':''}
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                            />
                        </CSSTransition>
                            <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe611;</i>
                            {this.getListArea()}
                    </SearchWrapper>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    {
                        login ? <NavItem className='right' onClick={logout}>Logout</NavItem> : 
                        <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }
                </Nav>
                <Addition>
                    <Button className='reg'>Register</Button>
                    <Link to="/write">
                    <Button className='writing'><i className="iconfont">&#xe71a;</i>Writing</Button>
                    </Link>
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
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login', 'login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus: (list) => {
            if (!list.size) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleBlur: () => {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage: (page, totalPage, spin) => {
            //spin.style.transform = 'rotate(360deg)'
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout: () => {
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)