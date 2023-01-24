import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import carService from '../../services/carService';


const CarList = () => {
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      carService
        .getCars()
        .then((response) => {
          setCars(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className='car-list'>
          <h2>Cars</h2>
          <ul>
              {cars.map(car => 
                  <li key={car.id} className='car-item'>
                      <Link to={`car/${car.id}`}>{car.name}</Link>
                                          <Link to={`/cars/${car.id}/edit`}>Editar</Link>

                  </li>
              )}
          </ul>
      </div>
    );
  }

export default CarList;
