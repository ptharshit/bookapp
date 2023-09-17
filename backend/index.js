import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//middleware to handle cors policy
// option 1: allow all origin with default of cors
app.use(cors());
// option 2: allow custom origins
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Database is connected');
    app.listen(PORT , () =>{
        console.log(`App is running on http://localhost:${PORT}`);
    });
})
.catch((error) =>{
    console.log(error);
});

app.get('',(req,res)=>{
    console.log(req);
    return res.status(234).send('welcome sir ji');
});
app.use('/books',bookRoutes);

