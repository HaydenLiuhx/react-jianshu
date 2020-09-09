import styled from 'styled-components'
import logoPic from '../../static/logo3.png'
export const HeaderWrapper = styled.div`
    position: relative;
    display: block;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #000000e0;
    font-family: sans-serif;
`;
export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 10px;
    width: 350px;
    height: 54px;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
`;
export const Nav = styled.div`
    width: 800px;
    padding-right: 70px;
    padding-left: 40px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 20px;
    color: #ec6149;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ffd591;
        font-bolde
    }
`;
export const SearchWrapper = styled.div`
    margin-left:40px;
    float:left;
    box-sizing: border-box;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: white;
        text-align:center;
        color:#ec6149;
        &.focused {
            background: #d4380d;
            color:white;
            bottom:4px;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    border:none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #ec6149;
    &::placeholder {
        color: white;
    }
    &.focused {
        width: 290px;
    }
    &.slide-enter {
        width:160px;
        transition: all .4s ease-out;
    }
    &.slide-enter-active {
        width: 290px;
    }
    &.slide-exit {
        transition: all .4s ease-out;
    }
    &.slide-exit-active {
        width:160px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 250px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 12px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 10px;
`
export const SearchInfoList = styled.span`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 3px;
    font-size: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
`
export const Addition = styled.div`
    position:absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    color: #f759ab;
    font-size: 15px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`