import React, { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContextProvider'

function Users() {
  const { users, setUsers } = useContext(UsersContext);
  // reset users
  const resetUsers = () => {
    setUsers([])
  }
  return (
    <>
      { users.length ? users.map(user => {
        return(
          <ul id={ user.id }>
            <li>{ user.name}</li>
            <li>{ user.county }</li>
          </ul>
        )
      }) : (
        <div className='bg bg-info'>
          <h4>No users found!</h4>
        </div>
      )}

    <button className='btn btn-danger' onClick={ resetUsers }>Reset users</button>
    </>
  )
}

export default Users