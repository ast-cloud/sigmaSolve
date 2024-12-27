import express from "express";
import Todo from "../models/Todo";
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/add', async (req:any,res:any)=>{
    const {userId, task} = req.body;
    try{
        const todo = new Todo({userId, task});
        await todo.save();
        res.status(200).json(todo);
    }catch(e){
        res.status(500).json({message: 'Error adding todo'});
    }
});

router.post('/:userId', async (req:any, res:any)=>{
    const token = req.body.token;   //Assuming token would be sent in request body.
    const {id} = jwt.decode(token) as any;

    if(id!==req.params.userId)
        return res.status(401).json({message: "Unauthorized access : Cannot access other user's data."});

    try{
        const todos = await Todo.find({userId: req.params.userId});
        res.status(200).json(todos);
    }catch(e){
        res.status(500).json({message: 'Error fetching todos'});
    }
})

router.post('/update/:userId', async (req:any, res:any)=>{
    const token = req.body.token;   //Assuming token would be sent in request body.
    const {id} = jwt.decode(token) as any;

    if(id!==req.params.userId)
        return res.status(401).json({message: "Unauthorized access : Cannot update other user's data."});

    try{
        const user = await Todo.findByIdAndUpdate(req.params.userId, req.body, {new: true});
        res.status(200).json(user);
    }catch(e){
        res.status(500).json({message: "Error updating"});
    }
})

router.post('/delete/:userId/:todoId', async (req:any, res:any)=>{
    const token = req.body.token;   //Assuming token would be sent in request body.
    const {id} = jwt.decode(token) as any;

    if(id!==req.params.userId)
        return res.status(401).json({message: "Unauthorized access : Cannot update other user's data."});

    try{
        await Todo.findByIdAndDelete(req.params.todoId);
        res.status(200).json({message: 'Successfully deleted todo.'});
    }catch(e){
        res.status(500).json({message: "Error updating"});
    }
})



export default router;