import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm =() => {
    const [employee, updateEmployees] = useState()
    const history = useHistory()

    const newEmployee =(event) => {
        event.preventDefault()

        const newEmp = {
            id: employee.id,
            name: employee.name,
            location: employee.location,
            isManager: false,
            fullTime: true,
            hrlyRate: 27.00
            
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmp)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() =>{
                history.push("/employees")
            })

    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="New Employees Full Name"
                        onChange={
                            (e) => {
                                const copy ={...employee}
                                copy.name = e.target.value
                                updateEmployees(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Location Requested"
                        onChange={
                            (e) => {
                                const copy ={...employee}
                                copy.location = e.target.value
                                updateEmployees(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Are you applying for manager?:</label>
                    <button type="button" class="check"
                        onChange={
                            (e) => {
                                const copy ={...employee}
                                copy.isManager = true
                                updateEmployees(copy)
                            }
                        }> </button>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <button type="button" class="check" 
                        onChange={
                            (e) => {
                                const copy ={...employee}
                                copy.fullTime = true
                                updateEmployees(copy)
                            }
                        }> </button>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hrlyRate">Hourly Rate Requested:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Area of Focus"
                        onChange={
                            (e) => {
                                const copy ={...employee}
                                copy.hrlyRate = e.target.value
                                updateEmployees(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={newEmployee}>
                Join The Company!
            </button>
        </form>
    )



}