import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import CarList from './pages/CarList/index';
import CarDetails from './pages/CarDetails/index';
import CreateEditCar from './pages/CreateEditCar/index';

function App() {
  return (
    <Router>
      <Route path="/car/:id" component={CarDetails} />
      <Route path="/" component={Home} exact />
      <Route path="/cars" component={CarList} exact />
      <Route path="/cars/:id/edit" component={CreateEditCar} />
    </Router>
  );
}

export default App;