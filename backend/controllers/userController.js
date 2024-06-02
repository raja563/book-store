import User from "../models/userModel.js";
import bcrypt from 'bcrypt' 

export const signup = async(req, res) => {
  try {
    // const userData = new User(req.body);
    // or
    const {username,email,password}=req.body;
    const userDate= await User.findOne({email})
    if (userDate) {
      return res.status(400).json({msg:"user already exists !!"});
    }

    // hashing the password 
    const hashPassword= await bcrypt.hash(password,5);

    const createdUser = new User({
      username:username,
      email:email,
      password:hashPassword,
    })
    const user=await createdUser.save();
    res.status(200).json({msg:" user created successfully !!!",user:{
      _id:user._id,
      username:user.username,
      email:user.email
    }
    });
  } catch (error) {
    console.log("error:"+error.msg);
    res.status(500).json({msg:"Internal server error!!"})
  }
};

export const login=async(req,res)=>{
    try {
      const {email,password} = req.body;
      const user= await User.findOne({email});

      const isMatch= await bcrypt.compare(password,user.password);

      if(!user||!isMatch){
        return res.status(400).json({msg:"invalid user or password !!!"});
      }else{
        res.status(201).json({msg:"login successfull !!",user:{

          _id:user._id,
          username:user.username,
          email:user.email,
          // password:user.password,
        },
          
        })
      }
     
      
    } catch (error) {
      console.log("error:"+error.msg);
      res.status(500).json({msg:"Internal server error!!"})
    }
}
