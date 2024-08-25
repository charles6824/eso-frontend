import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default LandingLayout
