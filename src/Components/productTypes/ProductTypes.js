import React, { useEffect, useState } from "react"

export const ProductTypeList = () => {
    const [productType, setproductType] = useState([])
  //  const [totalCustomerMessage, updateMessage] = useState("") 

    useEffect(
        () => {
            fetch("http://localhost:8088/productTypes")
                .then(res => res.json())
                .then((data) => {
                    setproductType(data)
                })
        },
        []
    )

    // useEffect(
    //     () => {
    //         if (productType.length === 1){
    //             updateMessage("You have 1 customer")
    //         }
    //         else {
    //             updateMessage(`You have ${productType.length} productType`)
    //         }
    //     },
    //     [productType]
    // )

    return (
        <>
            {/* <div>{totalCustomerMessage}</div> */}
            {
                productType.map(
                    (prodTypeList) => {
                        return <p key={`productType--${prodTypeList.id}`}>{prodTypeList.type}</p>
                    }
                )
            }
        </>
    )
}