import React, { useState, useEffect } from "react";
import carService from "../../services/carService";
import { useParams } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await carService.getCar(id);
        console.log(data)
        setCar(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (Object.keys(car).length > 0) {
    return (
      <div>
        <h2>{car.name}</h2>
        <p>Brand: {car.brand}</p>
        <p>Year: {car.year}</p>
        <p>Description: {car.description}</p>
        <h3>Owner</h3>
        <p>Name: {car.owner.name}</p>
        <p>Email: {car.owner.email}</p>
        <p>Phone: {car.owner.phone}</p>
      </div>
    );
  } else {
    return <p>Loading...</p>
  }  
}

export default CarDetails;
