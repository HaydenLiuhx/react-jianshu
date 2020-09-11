import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
class Detail extends Component {
    componentDidMount = () => {
        this.props.getDetail(this.props.match.params.id)
    }
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
const mapDispatchToProps = (dispatch) => ({
    getDetail: (id) => {
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));