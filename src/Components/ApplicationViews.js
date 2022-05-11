import React from "react";
import { Route } from "react-router-dom";
import { ProductList } from "./Products/ProductList";
import { LocationList } from "./Locations/LocationList";
import { EmployeeList } from "./Employees/EmployeeList";
import { EmployeeForm } from "./Employees/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      <div>
          
        <Route path="/products">
          <ProductList />
        </Route>

        <Route path="/locations">
          <LocationList />
        </Route>

        <Route exact path="/employees">
          <EmployeeList />
        </Route>

        <Route path="/employees/create">
          <EmployeeForm />
        </Route>

      </div>
    </>
  );
};
