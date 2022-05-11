import React, { useEffect, useState } from "react"

export const ProductTypeList = () => {
    const [productType, setproductType] = useState([])

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

    return (
        <>
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