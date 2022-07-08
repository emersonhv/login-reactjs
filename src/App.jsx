import { Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Login } from './components/Login';
import { UserDetail } from './components/UserDetail';
import './App.css'

//<Route path='user/:userId' element={<UserDetail />}></Route>

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='usuario' element={<UserDetail />}></Route>
      </Routes>
    </>
  )
}