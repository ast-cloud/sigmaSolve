import express from "express";
import User from "../models/User";


const router = express.Router();

router.get('/', async (req:any,res:any)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(e){
        res.status(500).json({message: 'Error fetching users'});
    }
})

export default router;