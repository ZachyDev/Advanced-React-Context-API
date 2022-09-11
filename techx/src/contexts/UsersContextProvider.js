import React, { createContext, useState } from 'react'
export const UsersContext = createContext();

function UsersContextProvider(props) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Zachary',
      county: 'Nairobi'
    },
    {
      id: 2,
      name: 'Henry',
      county: 'Kisii'
    },
    {
      id: 3,
      name: 'Moseti',
      county: 'Nakuru'
    },
    {
      id: 4,
      name: 'Reagan',
      county: 'Kisumu'
    }
  ]);
  return (
    <UsersContext.Provider value={{ users,setUsers }}>
      { props.children }
    </UsersContext.Provider>
  )
}

export default UsersContextProvider
