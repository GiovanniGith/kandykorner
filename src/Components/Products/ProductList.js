import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])
  //  const [totalCustomerMessage, updateMessage] = useState("") 

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=prouctType")
                .then(res => res.json())
                .then((data) => {
                 setProducts(data)
                })
        },
        []
    )
    return (
        <>
            {
                products.map(
                    (prodList) => {
                        return <p key={`product--${prodList.id}`}>{prodList.name} ${prodList.price} {prodList.productTypeId.type}</p>
                    }
                )
            }
        </>
    )
}