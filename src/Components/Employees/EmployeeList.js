import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setemployees] = useState([])
  //  const [totalCustomerMessage, updateMessage] = useState("") 

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setemployees(data)
                })
        },
        []
    )

    // useEffect(
    //     () => {
    //         if (employees.length === 1){
    //             updateMessage("You have 1 customer")
    //         }
    //         else {
    //             updateMessage(`You have ${employees.length} employees`)
    //         }
    //     },
    //     [employees]
    // )

    return (
        <>
            {/* <div>{totalCustomerMessage}</div> */}
            {
                employees.map(
                    (empList) => {
                        return <p key={`employee--${empList.id}`}>{empList.name}</p>
                    }
                )
            }
        </>
    )
}