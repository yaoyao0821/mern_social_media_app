// import express from 'express';
//for password in db
import bcrypt from 'bcryptjs';
//for users long-time login
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import UserModal from '../models/users.js';

const secretKey = 'test';

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // find the existing user by email
        const existingUser = await UserModal.findOne({ email });

        // if no user in db
        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist" });
    
        // if password is wrong
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid credentials" });
    
        // the info need to be stored in token; secretKey; options (exp time)
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            secretKey,
            { expiresIn: "1h" }
        );

        // return the token
        res.status(200).json({ result: existingUser, token });
      } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
      }
};

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const oldUser = await UserModal.findOne({ email });

        if (oldUser)
            return res.status(400).json({ message: "User already exists" });

        // hash (encrypt) the password; salf value usually is 12
        const hashedPassword = await bcrypt.hash(password, 12);

        // create a new instanse and save it into DB
        const result = await UserModal.create({
            email, password: hashedPassword,
            name: `${firstName} ${lastName}`});

        const token = jwt.sign(
            { email: result.email, id: result._id },
            secretKey,
            { expiresIn: "1h" }
        );
        
        // return the token
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
    
};