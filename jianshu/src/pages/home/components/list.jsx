import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import listPic from '../../../static/list-pic.png'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom' 
class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <Fragment>
                { 
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem key={index}>
                                    <img className="list-pic" alt="" src={listPic} />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    }) 
                }
                <LoadMore onClick={()=>getMoreList(page)}>MORE</LoadMore>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
    getMoreList: (page) => {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);