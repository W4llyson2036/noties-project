import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home/Home'
import { CreateNewAccount } from './pages/CreateNewAccount/CreateNewAccount'
import { MainLayout } from './layout/MainLayout'
import { CreateNewDeck } from './pages/CreateNewDeck/CreateNewDeck'
import { AddCard } from './pages/Home/AddCard/AddCard'
import { ReviewCard } from './pages/Home/ReviewCard/ReviewCard'

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/creatnewaccount' element={<CreateNewAccount />}/>
          <Route element={<MainLayout />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/home/createcard/:fordeckname/:id' element={<AddCard />}/>
            <Route path='/home/review' element={<ReviewCard />}/>
            <Route path='/createnewdeck' element={<CreateNewDeck />}/>
          </Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)