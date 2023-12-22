const express = require('express');
const mongoose = require('mongoose');
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


const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB: ${process.env.DB_HOST}`);
    const con = await mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    con.connection.on("connected", () => {
      console.log("MongoDB connected:", con.connection.host);
    });

    con.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    con.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

connectDB();


app.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      Email,
      UserName,
      password,
      country,
      occupation,
      Marital_status,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await registerModel.create({
      fullName,
      Email,
      UserName,
      password: hashedPassword,
      country,
      occupation,
      Marital_status,
    });

    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    res.json({ message: "Registration successful", token });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(500)
      .json({
        message: "An error occurred during registration",
        error: error.message,
      });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { Email, password } = req.body;

    const user = await registerModel.findOne({ Email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({ message: "Login successful", name: user.fullName });
      } else {
        res.json({ message: "Invalid password" });
      }
    } else {
      res.json({ message: "Nonexistent record" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred during login" });
  }
});

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