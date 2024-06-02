import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

// userSchema.pre("save", async function(next){
//     const User=this;
//     if(!User.isModified("password"))return next();

//     try {
//         const salt=await bcrypt.genSalt(5);
//         const hashPassword=await bcrypt.hash(User.password,salt);
//         User.password=hashPassword;
//         next();
//     } catch(error){
//         return next(error);
//     }
// })

const User=mongoose.model('User',userSchema);

export default User