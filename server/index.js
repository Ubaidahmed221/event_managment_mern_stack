import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; 
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

// Apply CORS before routes
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend origin
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

    const varifyUser = (req,res,next)=>{
        const token = req.cookies.token;
        if(!token){
            return res.json("Token is missing")
        }else{
            jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
                if(err){
                    return res.json("Error with token")
                }else{
                    if(decoded.role === "admin"){
                        next()
                    }else{
                        return res.json("not admin")
                    }
                }
            })
        }
    };
    
    app.get('/dashboard',varifyUser,(req,res)=>{
        res.json("Success")
    })
// Routes should be defined after CORS middleware
app.use("/api", userRoutes);
