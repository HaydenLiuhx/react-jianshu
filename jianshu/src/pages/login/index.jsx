import React, { PureComponent } from 'react'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
class Login extends PureComponent {
    state = {
        account: "",
        password: ""
    }
    handleAccount = (e) => {
        this.setState({account: e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    render() {
        if (!this.props.loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="Username" value={this.state.inputValue} onChange={this.handleAccount}/>
                        <LoginInput placeholder="Password" type="password" value={this.state.inputValue} onChange={this.handlePassword}/>
                        <LoginButton onClick={()=>this.props.login(this.state.account, this.state.password) }>Login</LoginButton>
                        {/* <LoginInput placeholder="Username" innerRef={(input) => {this.account = input}}/>
                        <LoginInput placeholder="Password" type="password" innerRef={(input) => {this.password = input}}/>
                        <LoginButton onClick={()=>this.props.login(this.account, this.password) }>Login</LoginButton> */}
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
})
const mapDispatchToProps = (dispatch) => ({
    login(accountElement, passwordElement){
        dispatch(actionCreators.login(accountElement, passwordElement))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);