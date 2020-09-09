import React from 'react';
import Header from './common/header'
import './App.less'
import './static/iconfont/iconfont'
import { GlobalStyle } from './style.js'
import { IconFont } from './static/iconfont/iconfont.js'
function App() {
  return (
    <div>
      <GlobalStyle />
      <IconFont />
      <Header />
    </div>
  )
}

export default App;
