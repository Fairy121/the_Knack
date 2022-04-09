import React from 'react'
import Header from '../Header/Header'
import { Route,Routes } from 'react-router-dom';
import Account from "../Account/Account";
import Community from '../Community/Community';
import ProtectedRoute from '../User/ProtectedRoute';
import Mixer from '../Mixer/Mixer';
import Mentors from '../Mentors/Mentors';
import Events from '../Events/Events';

function Main() {
  return (
    <>
    <ProtectedRoute>
      <Header />
      <Routes>
        <Route path='account' element={<Account />} />
        <Route path='mixer' element={<Mixer/>} />
        <Route path='/events' element={<Events />} />
        <Route path=''element={<Mentors />} />
      </Routes>
    </ProtectedRoute>
    </>
  )
}

export default Main
