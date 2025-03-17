import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import express from 'express'
import userAuth from '../middlewares/auth.js';

const userRouter=express.Router()

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userAuth,userCredits);
//userRouter.post('create-payment-intent',userAuth,createPaymentIntent);

export default userRouter;