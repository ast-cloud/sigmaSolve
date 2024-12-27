import express from 'express';

import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';
import usersRoutes from './routes/users';
import todoRoutes from './routes/todo';

const app = express();

app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/todo', todoRoutes);

app.listen(3000, ()=>{
    console.log('Express server started at port localhost 3000');
})