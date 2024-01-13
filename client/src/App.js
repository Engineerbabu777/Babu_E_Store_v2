import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  LoginPage,
  OrderSuccessPage,
  ProductDetailsPage,
  SignupPage
} from './routes/Routes.js'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ActivationPage from './pages/ActivationPage.jsx'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/actions/user.js'
import Store from './redux/store.js'
import ProfilePage from './pages/ProfilePage.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route
          path='/activation/:activation_token'
          element={<ActivationPage />}
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/order/success' element={<OrderSuccessPage />} />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        f
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </BrowserRouter>
  )
}

export default App
