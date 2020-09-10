import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import detailImg from '../../static/detail.png'
import { connect } from 'react-redux'
class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <img style={{height:'400px', width:'100%'}} alt="" src={require("../../static/detail.png")} />
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})
export default connect(mapStateToProps,({}))(Detail);