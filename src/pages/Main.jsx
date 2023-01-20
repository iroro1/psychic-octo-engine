import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Home'
const Main = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Main