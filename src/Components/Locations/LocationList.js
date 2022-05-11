import React, { useEffect, useState } from "react";

export const LocationList = () => {
  const [locations, setlocations] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then((data) => {
        setlocations(data);
      });
  }, []);

  return (
    <>
      {locations.map((locList) => {
        return (
          <p key={`location--${locList.id}`}>
            {" "}
            Location # {locList.id} at {locList.address}
          </p>
        );
      })}
    </>
  );
};
