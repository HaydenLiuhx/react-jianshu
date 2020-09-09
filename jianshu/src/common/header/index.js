import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={400}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused?'focused':''}
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                        />
                    </CSSTransition> 
                        <i className={props.focused?'focused iconfont':'iconfont'}>&#xe611;</i>
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

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus: () => {
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleBlur: () => {
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)