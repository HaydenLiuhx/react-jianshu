import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    margin: 0 auto;
    width: 960px;
    font-family: sans-serif;
`
export const HomeLeft = styled.div`
    margin-left: 10px;
    float: left;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc
`
export const TopicItem = styled.div`
    margin-left: 18px;
    float: left;
    padding-right: 10px;
    height: 32px;
    font-size: 12px;
    background: #f7f7f7;
    line-height: 32px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        margin-right:10px;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    height: 100px;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 15px;
        font-weight: blod;
        color: #333;
    }
    .desc{
        line-height: 24px;
        color: #999;
        font-size: 11px;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background-size: contain;
    border-radius: 8px;
    margin-bottom: 10px;
`
export const WriterWrapper = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    width: 278px;
    line-height: 300px;
    text-align: center;
`
export const WriterItem = styled.div`
    margin-bottom: 10px;
`