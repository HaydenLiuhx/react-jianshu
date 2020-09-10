import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem style={{backgroundColor: '#ffa39e'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px'}}>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#cf1322'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px', color:'white'}}>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ffbb96'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px'}}>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#d4380d'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px', color:'white'}}>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ffd591'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px'}}>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#d46b08'}}>
                <h4 style={{paddingTop:'15px', paddingLeft:'20px', color:'white'}}>Lorem Ipsum</h4>
                </RecommendItem>
            </RecommendWrapper>
        )
    }
}
export default Recommend;