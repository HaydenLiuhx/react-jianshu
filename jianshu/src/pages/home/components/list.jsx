import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import listPic from '../../../static/list-pic.png'
class List extends Component {
    render() {
        const { list } = this.props
        return (
            <Fragment>
                { 
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="list-pic" alt="" src={listPic} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    }) 
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
})
export default connect(mapStateToProps,{})(List);