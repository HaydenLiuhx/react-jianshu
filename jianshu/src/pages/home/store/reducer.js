import { fromJS } from 'immutable'
const defaultState = fromJS({
    topicList: [
    {
        id: 1,
        title: 'Fictions',
        imgUrl: 'https://upload.jianshu.io/collections/images/11/20100120161805563.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 2,
        title: 'Natural',
        imgUrl: 'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 3,
        title: 'Internet',
        imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 4,
        title: 'Programmer',
        imgUrl: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 5,
        title: 'Digital Products',
        imgUrl: 'https://upload.jianshu.io/collections/images/264569/2.pic.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 6,
        title: 'Leetcode',
        imgUrl: 'https://upload.jianshu.io/collections/images/299883/QQ20161112-2_2x.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
    {
        id: 7,
        title: 'Cartoon',
        imgUrl: 'https://upload.jianshu.io/collections/images/540903/1f2936a662509e7d64528466be5546f4_r.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },
],
    articleList: [
    {
        id: 1,
        title: 'Lorem Ipsum',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/10298485-a45b130a217d9b12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp'
    },
    {
        id: 2,
        title: 'What is Lorem Ipsum?',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/23935866-06649d65c8367e1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp'
    },
    {
        id: 3,
        title: 'Why do we use it?',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/23582261-173cb553ae6cf020.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp'
    }
],
})

//固定的输入会有固定的输出,没有副作用,-》纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}