import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused: false,
        }
    }
    handleFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleBlur = () => {
        this.setState({
            focused: false
        })
    }
    render() {
        return(
            <div>
                <HeaderWrapper>
                    <Logo href='/' />
                    <Nav>
                        <NavItem className='left active'>Home</NavItem>
                        <NavItem className='left'>Download</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.state.focused}
                                timeout={400}
                                classNames="slide"
                            >
                                <NavSearch 
                                    className={this.state.focused?'focused':''}
                                    onFocus={this.handleFocus}
                                    onBlur={this.handleBlur}
                                />
                            </CSSTransition> 
                                <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe611;</i>
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
            </div>
        )
    }
}