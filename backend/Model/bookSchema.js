import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }],
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    }
})

const book = mongoose.model('book',bookSchema)
export default book