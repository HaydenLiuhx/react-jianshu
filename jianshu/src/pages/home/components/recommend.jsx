import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem style={{backgroundColor: '#ffa39e'}}>
                <h4>Lorem Ipsum</h4>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ff4d4f'}}>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ffbb96'}}>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ff7a45'}}>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ffd591'}}>
                </RecommendItem>
                <RecommendItem style={{backgroundColor: '#ffa940'}}>
                </RecommendItem>
            </RecommendWrapper>
        )
    }
}
export default Recommend;