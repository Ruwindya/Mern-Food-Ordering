import express,{Request,Response} from 'express';
import cors from "cors"
import "dotenv/config"
import mongoose from 'mongoose';
import MyUserRoutes from './routes/MyUserRoutes';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("connected to database"));

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/my/user",MyUserRoutes);
   
app.listen(7000,()=>{
    console.log("server started on localhost: 7000")
})