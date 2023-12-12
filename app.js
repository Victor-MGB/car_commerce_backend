const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const registerModel = require('./Model/RegisterModel')
// const auth = require('./middleware/auth')
const path = require('path');
const app = express()
const port = 4000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const car = require('./Model/cars');
const newArrival = require('./cars/newArrival');
const allCars = require('./cars/allCars');
const ProductRoutes = require('./Routes/productRoutes');


require('dotenv').config()
// require('./config/database')

app.use(
  "/NewArrivalCarImage",
  express.static(path.join(__dirname, 'NewArrivalCarImage'))
);

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  registerModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "successful", name: user.name });
        } else {
          res.json({ message: "invalid password" });
        }
      } else {
        res.json({ message: "non existed record" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred" });
    });
});
  
  app.post('/register',async(req,res)=>{
    const {fullName,
    Email,
    UserName,
    password,
    country,
    occupation,
    Marital_status}=req.body
    const hashedPassword = await bcrypt.hash(password,12);
    const user = await registerModel.create({
      fullName,
      Email,
      UserName,
      password: hashedPassword,
      country,
      occupation,
      Marital_status,
    });
    const token = jwt.sign(
      {user_id:user._id},
      process.env.JWT_SECRETE,
      {
        expiresIn:"5h",
      }
    )

    res.status(201).json({
      status:'success',
      token,
      user
    })
  })

  app.get('/allcars',(req,res)=>{
    res.json(allCars);
  })

app.get("/newcars", (req, res) => {
  res.json(newArrival);
});

app.post('/newcars',(req,res)=>{
  const newCar = req.body;
  newArrival.push(newCar);
  res.json(newArrival);
})

app.put('/newcars/:id',(req,res)=>{
  const carId = parseInt(req,params.id);
  const updateCar = req.body;

  newArrival.forEach((car,index)=>{
    if(car.id === carId){
      newArrival[index] = updateCar;
    }
  });
  res.json(newArrival)
})

app.delete('/newcars/:id',(req,res)=>{
  const carId = parseInt(req.params.id);
  const indexToRemove = newArrival.findIndex((car)=>car.id === carId)
  if(indexToRemove !==-1){
    newArrival.splice(indexToRemove,1)
  }
  res.json(newArrival)
})

app.patch('/newcars/:id',(req,res)=>{
  const carId = parseInt(req.params.id);
  const updates = req.body;

  newArrival.forEach((car,index)=>{
    if(car.id === carId){
      newArrival[index] = {...car,...update};
    }
  })
  res.json(newArrival)
})

app.use('/api/products',ProductRoutes)
app.listen(port,()=>{
    console.log(`app is running on port 4000`);
})