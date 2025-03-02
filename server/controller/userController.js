import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
// const jwt = require("jsonwebtoken")
// const cookieParser = require("cookie-parser")
import jwt from "jsonwebtoken";  // ✅ Fix require issue
import cookieParser from "cookie-parser";

// Signup API
export const signup = async (req, res) => {
    try {
        const { name, email, password, phone_no } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone_no
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: savedUser });

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

// Login API
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { email: user.email, role: user.role, name: user.name },
            "jwt-secret-key",
            { expiresIn: "1d" }
        );

        // Set token in cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
        
        res.status(200).json({ Status: "Success", role: user.role, name: user.name });

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


// Logout API
export const logout = async (req, res) => {
    res.clearCookie('token', { path: '/' }); // Clear the token cookie
    res.status(200).json({ message: "Logged out successfully" }); // Send a success response
};
