import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { SyncOutlined } from '@ant-design/icons';
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
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage)}}>
                            <SyncOutlined spin={true} />
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
        const { focused, handleFocus, handleBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo href='/' />
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
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </CSSTransition>
                            <i className={focused?'focused iconfont':'iconfont'}>&#xe611;</i>
                            {this.getListArea()}
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
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
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
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage: (page, totalPage) => {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)