import React,{createContext,useState} from 'react'

// create context
export const EmployeesContext = createContext()

function Employees(props) {
  // initialize state
  const [employees,setEmployees] = useState([
    {
      id: 1,
      firstName: 'Zachary',
      lastName: 'Moseti',
      role: 'Software Developer'
    },
    {
      id: 2,
      firstName: 'Jeff',
      lastName: 'Matieso',
      role: 'Backend Developer'
    }
  ])
  return (
    <EmployeesContext.Provider value={{employees,setEmployees}}>
      {props.children}
    </EmployeesContext.Provider>
  )
}

export default Employees