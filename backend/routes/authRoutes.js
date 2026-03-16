import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();


// REGISTER USER
router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.json({
      message: "User registered successfully",
      user: newUser
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// LOGIN USER
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: existingUser
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


export default router;