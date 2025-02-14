import { Request, Response } from "express";
import bcrypt from "bcrypt";
import env from "dotenv";
import jwt from "jsonwebtoken"
import crypto from "crypto";
import userModel from "../model/userModel";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const token = crypto.randomBytes(4).toString("hex");
    const user = await userModel.create({
      userName,
      email,
      password: hashed,
      isVerifiedToken: token,
    });
    return res.status(201).json({
      message: "Account created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error creating sccount", status: 404 });
  }
};


export const verifyAccount = async(req:Request,res:Response):Promise<Response> => {
    try {
        const {userID} = req.params
        const user = await userModel.findByIdAndUpdate(userID,
            {
                isVerified:true,
                isVerifiedToken:""
            },
            {new:true}
        )
        return res.status(201).json({message:"Account verified successfully",data:user,status:201})
    
        
    } catch (error) {
        return res.status(404).json({message:"Error verifyinh account",status:404})
        
    }

}




export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      email,
    });
    if(user) {
        const decryptpassword = await bcrypt.compare(password,user.password)
        if (decryptpassword) {
            if (user?.isVerified && user.isVerifiedToken === "") {
                const token = jwt.sign(
                    {user?._id},
                    process.env.JWT_SECRET as string,
                    {expiresIn:process.env.JWT_EXPIRES}
                )
                return res.status(201).json({
                    message: "Login successfully",
                    data:token ,
                    status: 201,
                  });

            }else {
                return res.status(404).json({message:"Error verifyinh account",status:404})

            }

        }else {
            return res.status(404).json({message:"Incorrect password",status:404})

        }
    } else {
        return res.status(404).json({message:"Error with email",status:404})

    }

  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error Login sccount", status: 404 });
  }
};


export const Readone = async(req:Request,res:Response):Promise<Response> => {
    try {
        const{userID} = req.params
        const user = await userModel.findById(userID)
        return res.status(200).json({message:"One user found successfully",data:user,status:200})
        
    } catch (error) {
        return res.status(404).json({message:"Readone user error",status:404})
        
    }
}
export const ReadAll = async(req:Request,res:Response):Promise<Response> => {
    try {

        const user = await userModel.find()
        return res.status(200).json({message:"All user found successfully",data:user,status:200})
        
    } catch (error) {
        return res.status(404).json({message:"ReadAll user error",status:404})
        
    }
}


export const ForgetPassword = async(req:Request,res:Response) => {
    try {
        const{email} = req.body
        const user = await userModel.findOne({email})
        const token = crypto.randomBytes(6).toString("hex")
   if (user) {
   await userModel.findByIdAndUpdate(
    user?._id, {
        isVerifiedToken:token,
     
    }
   )
   return res.status(201).json({message:"email has been sent to you",data:user,status:201})

   }else {
    return res.status(404).json({message:"something wrong",status:404})
        

   }
        
    } catch (error) {
        return res.status(404).json({message:"error",status:404})
        
        
    }
}

export const changePassword = async(req:Request,res:Response) => {
    try {
        const{userID} = req.params
        const{password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password,salt)
      
   if (userID) {
   await userModel.findByIdAndUpdate(
    userID, {
        isVerifiedToken:"",
        password:hashed
    }
   )
   return res.status(201).json({message:"email has been sent to you",status:201})

   }else {
    return res.status(404).json({message:"something wrong",status:404})
        

   }
        
    } catch (error) {
        return res.status(404).json({message:"error",status:404})
        
        
    }
}