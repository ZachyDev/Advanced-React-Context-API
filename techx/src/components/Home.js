import React from 'react'
import UsersContextProvider from '../contexts/UsersContextProvider';
import Users from './Users';

function Home() {
  return (
    <>
    <UsersContextProvider>
        <Users />
    </UsersContextProvider>
    </>
  )
}

export default Home