const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const registerModel = require('./Model/RegisterModel')
const path = require('path');
const app = express()
// const port = 4000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const newArrival = require('./cars/newArrival');
const allCars = require('./cars/allCars');
const ProductRoutes = require('./Routes/productRoutes');


require('dotenv').config()



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


// app.post("/register", async (req, res) => {
//   try {
//     const {
//       fullName,
//       Email,
//       userName,
//       password,
//       checked
//     } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await registerModel.create({
//       fullName,
//       Email,
//       userName,
//       password: hashedPassword,
//       checked,
//     });

//     const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRETE, {
//       expiresIn: "5h",
//     });

//     res.json({ message: "Registration successful", token });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred during registration" });
//   }
// });


// app.post('/login',async(req,res)=>{
//   const {email,password} = req.body;
//   const user = await registerModel.findOne({email})
//   if(!user){
//     return res.status(404).json({message: "user does not exist"});
//   }

//   const isPasswordCorrect = await bcrypt.compare(password,user.password);

//   if(isPasswordCorrect)
//   return res.status(400).json({message:"invalid credentiaLs"});

//   const token = jwt.sign({user_id: user._id},process.env.JWT_SECRETE,{
//     expiresIn:"5h"
//   })

//   res.status(200).json({
//     status:"success",
//     token,
//     user
//   })
// })

//   app.get('/allcars',(req,res)=>{
//     res.json(allCars);
//   })

// app.get("/newcars", (req, res) => {
//   res.json(newArrival);
// });

// app.post('/newcars',(req,res)=>{
//   const newCar = req.body;
//   newArrival.push(newCar);
//   res.json(newArrival);
// })

// app.put('/newcars/:id',(req,res)=>{
//   const carId = parseInt(req,params.id);
//   const updateCar = req.body;

//   newArrival.forEach((car,index)=>{
//     if(car.id === carId){
//       newArrival[index] = updateCar;
//     }
//   });
//   res.json(newArrival)
// })

// app.delete('/newcars/:id',(req,res)=>{
//   const carId = parseInt(req.params.id);
//   const indexToRemove = newArrival.findIndex((car)=>car.id === carId)
//   if(indexToRemove !==-1){
//     newArrival.splice(indexToRemove,1)
//   }
//   res.json(newArrival)
// })

// app.patch('/newcars/:id',(req,res)=>{
//   const carId = parseInt(req.params.id);
//   const updates = req.body;

//   newArrival.forEach((car,index)=>{
//     if(car.id === carId){
//       newArrival[index] = {...car,...update};
//     }
//   })
//   res.json(newArrival)
// })

// app.use('/api/products',ProductRoutes)
// app.listen(port,()=>{
//     console.log(`app is running on port 4000`);
// })





// app.post("/register", (req, res) => {

//   const {fullName, userName, email, password } = req.body;
//   registerModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       res.json("Already registered");
//     } else {
//       registerModel.create(req.body)
//         .then((log_reg_form) => res.json(log_reg_form))
//         .catch((err) => res.json(err));
//     }
//   });
// });


 app.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      Email,
      userName,
      password,
      checked
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await registerModel.create({
      fullName,
      Email,
      userName,
      password: hashedPassword,
      checked,
    });

    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRETE, {
      expiresIn: "5h",
    });

    res.json({ message: "Registration successful", token });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  registerModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    }
    else {
      res.json("No records found! ");
    }
  });
});

app.get("/allcars", (req, res) => {
  res.json(allCars);
});

app.get("/newcars", (req, res) => {
  res.json(newArrival);
});

app.post("/newcars", (req, res) => {
  const newCar = req.body;
  newArrival.push(newCar);
  res.json(newArrival);
});

app.listen(4000, () => {
  console.log("Server listining on http://127.0.0.1:4000");
});