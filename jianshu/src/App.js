import React from 'react';
import Header from './common/header'
import './App.less'
import './static/iconfont/iconfont'
import { GlobalStyle } from './style.js'
import { IconFont } from './static/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconFont />
      <Header />
    </Provider>
  )
}

export default App;
