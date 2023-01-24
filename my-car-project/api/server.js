const express = require('express');
      const app = express();
      const cars = require('./db');
      const cors = require('cors');

      
app.use(cors());
app.listen(3000, () => console.log('Server started'));

app.get("/cars", (req, res) => {
    res.json(cars);
});
    
app.get("/cars/:id", (req, res) => {
    const car = cars.find(c => c.id === Number(req.params.id));
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
});

app.post("/cars", (req, res) => {
    const newCar = req.body;
    newCar.id = cars.length + 1;
    cars.push(newCar);
    res.json(newCar);
});

app.put("/cars/:id", (req, res) => {
    const index = cars.findIndex(c => c.id === Number(req.params.id));
    if (index !== -1) {
        cars[index] = { ...cars[index], ...req.body };
        res.json(cars[index]);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
});

app.delete("/cars/:id", (req, res) => {
    const index = cars.findIndex(c => c.id === Number(req.params.id));
    if (index !== -1) {
        cars.splice(index, 1);
        res.json({ message: "Car deleted" });
    } else {
        res.status(404).json({ message: "Car not found" });
    }
});
