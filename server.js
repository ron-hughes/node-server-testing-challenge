const express= require('express');
const server= express();
const helmet= require('helmet');
const cors= require('cors');


server.use(cors());
server.use(helmet());
server.use(express.json());

//define routers
const carsRouter= require('../cars/carsRouter');

//assign routers
server.use('/api/cars', carsRouter);

//root route
server.get('/', (req, res) => {
  res.status(200).json("<h1>Welcome!</h1>");
});

module.exports= server;