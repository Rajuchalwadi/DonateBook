import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connect =async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("Connection sucessfully")
    } catch (error) {
        console.log("Error :",error.message)
    }
}

export default connect