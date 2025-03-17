import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js" 
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageroutes.js"
import paymentRoutes from "./routes/paymentroutes.js"

const PORT=process.env.PORT || 4000

const app=express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);
app.use('/api/payment',paymentRoutes);
app.get('/',(req,res)=>{
    res.send('API IS WORKING fine');
})

app.listen(PORT,()=>{
    console.log(`Server is running on  ${PORT}`);
})