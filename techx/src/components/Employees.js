import React,{useContext} from 'react'
import {EmployeesContext} from '../contexts/Employees'

function Employees() {
  // call useContext
  const {employees,setEmployees} = useContext(EmployeesContext)
  const resetEmployees = () => {
    setEmployees([]);
  }
  return (
    <>
      { employees.length ? employees.map(employee => {
        return(
          <ul id={ employee.id }>
            <li>{ employee.firstName}</li>
            <li>{ employee.lastName }</li>
          </ul>
        )
      }) : (
        <div className='bg bg-info'>
          <h4>No employees found!</h4>
        </div>
      )}
      <button onClick={resetEmployees}>Reset Employees</button>
    </>
  )
}

export default Employees