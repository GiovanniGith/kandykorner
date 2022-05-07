import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setlocations] = useState([])
  //  const [totalCustomerMessage, updateMessage] = useState("") 

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setlocations(data)
                })
        },
        []
    )

    // useEffect(
    //     () => {
    //         if (locations.length === 1){
    //             updateMessage("You have 1 customer")
    //         }
    //         else {
    //             updateMessage(`You have ${locations.length} locations`)
    //         }
    //     },
    //     [locations]
    // )

    return (
        <>
            {/* <div>{totalCustomerMessage}</div> */}
            {
                locations.map(
                    (locList) => {
                        return <p key={`location--${locList.id}`}> Location # {locList.id} at {locList.address}</p>
                    }
                )
            }
        </>
    )
}