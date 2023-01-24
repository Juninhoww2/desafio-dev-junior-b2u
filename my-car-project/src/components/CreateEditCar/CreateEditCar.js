import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function CreateEditCar() {
  const [car, setCar] = useState({});
  // ...

  const { id } = useParams();
  const isEditing = !!id;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`/cars/${id}`, car);
        alert("Car updated successfully!");
      } else {
        await axios.post("/cars", car);
        alert("Car created successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    async function fetchData() {
      try {
        if (isEditing) {
          const response = await axios.get(`/cars/${id}`);
          setCar(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id, isEditing]);

  return car &&(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={car.brand}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={car.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={car.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <h3>Owner</h3>
        <label>
          Name:
          <input
            type="text"
            name="owner.name"
            value={car.owner && car.owner.name} 
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="owner.email"
            value={car.owner && car.owner.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="owner.phone"
            value={car.owner && car.owner.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
        <Link to="/cars">Cancel</Link>

      </form>
      
    </div>
  );
}

export default CreateEditCar;