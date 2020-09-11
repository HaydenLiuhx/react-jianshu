import React from 'react';
import Header from './common/header'
import './App.less'
import './static/iconfont/iconfont'
import { GlobalStyle } from './style.js'
import { IconFont } from './static/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconFont />
      <BrowserRouter>
        <Header />
        <Route path='/login' exact component={Login}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
