import express from "express";
import User from "../models/User";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req:any, res:any)=>{
    const { email, phoneNumber, password, confirmPassword} = req.body;

    if(password!==confirmPassword){
        return res.status(400).json({
            message: 'Passwords do not match.'
        })
    }

    try{
        const user = new User({ email, phoneNumber, password});
        await user.save();
        res.status(200).json({message:'User registered successfully.'});
    }catch(e){
        res.status(500).json({message:'Error registering user.'});
    }

})

router.post('/login', async (req:any, res:any)=>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: 'Invalid email or password.'})
        }
        if(password!==user.password){
            return res.status(400).json({message: 'Incorrect password.'})
        }
        const token = jwt.sign({id: user._id}, 'secretkey1234', { expiresIn: '1h' });
        return res.status(200).json({token});
    }catch(e){
        res.status(500).json({message:'Error logging in.'});
    }
});

export default router;
