import mongoose, { mongo } from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const user = mongoose.model('user',userSchema)
export default user