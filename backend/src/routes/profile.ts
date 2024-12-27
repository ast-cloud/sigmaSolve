import express from "express";
import User from "../models/User";


const router = express.Router();

router.get('/:id', async (req:any, res:any)=>{
    try{

        const user = await User.findById(req.params.id);

        if(!user)
            return res.status(400).json({message: 'User does not exist'});

        res.status(200).json(user);

    }catch(e){
        return res.status(400).json({message: 'Error fetching user data.'});
    }
});

router.put('/:id', async (req:any, res:any)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(user);
    }catch(e){
        return res.status(500).json({message: 'Error updating user data.'});
    }
})

export default router;