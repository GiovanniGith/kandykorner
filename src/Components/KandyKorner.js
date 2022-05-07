import React, { useEffect, useState } from "react";
import { EmployeeList } from "./Employees/EmployeeList";
import { LocationList } from "./Locations/LocationList";
import { ProductList } from "./Products/ProductList";



export const KandyKorner = () => {
    return (
        <>
                    <h1> Kandy Korner </h1>
                    
                    <h2>Locations</h2>
                    <LocationList/>


                    <h2>Kandy Offered</h2>
                    <ProductList/>

                    <h2>Employees</h2>
                    <EmployeeList/>
      </>
  );
};
