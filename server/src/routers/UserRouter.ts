import express, { Router, Request, Response, response } from 'express';
import { UserService } from '../service/UserService';
import { StatusCodes } from 'http-status-codes';

export const userRouter:Router = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await UserService.getallusers();
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
});

userRouter.get('/:id', async (req:Request,res:Response)=>{
    try {
      const id = parseInt(req.params.id);
      const user = await UserService.getbyuserid(id);
      res.status(StatusCodes.OK).json(user);
    } catch (err){
      console.log(`Error : ${err}`);
    }

})

userRouter.post('/',async (req:Request,res:Response)=>{
  try{
    const result = await UserService.createuser(req.body);
    res.status(StatusCodes.OK).json(result);
  }catch(err){
    console.log(`Error :${err}`);
  }
})