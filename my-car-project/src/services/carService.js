import axios from 'axios';

const API_URL = 'http://localhost:3000/cars';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getCars() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getCar(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error)

      throw error;
    }
  },
  async createCar(car) {
    try {
      const response = await axios.post(API_URL, car);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateCar(id, car) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, car);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async deleteCar(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
