import book from "../Model/bookSchema.js"
import user from "../Model/user.js"
const userData=async(req ,res)=>{
    const {name , email , phone_number} = req.body
    console.log(name , email , phone_number)
    try {
        const new_data = new user({
            name:name,
            email:email,
            phone_number:phone_number
        })
    
        await new_data.save()
        res.send("Data Submited Sucessfully")
    } catch (error) {
        res.send("Email Already Exists")
    }
}

const donateBookData=async(req ,res)=>{
    const {email ,title , author,genre,publication,isbn} = req.body
    const  user_data = await user.find({email:email})

    try {
        if(user_data.length){
            const new_data = new book({
                user_id:user_data[0]._id,
                title:title,
                author:author,
                genre:genre,
                publication:publication,
                isbn:isbn
            })
    
            await new_data.save()
        }
    } catch (error) {
        console.log("Error:",error.message)
    }

    res.send("Data Submited Sucessfully")
}

const getAllData=async(req,res)=>{
    const data = await book.find().populate('user_id','name email phone_number')
    if(data){
        res.send(data)
    }
}

const getDatabyId=async(req,res)=>{
    const id = req.params.id
    const data = await book.findById(id)
    res.send(data)
}

const deleteDataById=async(req,res)=>{
    const id = req.params.id
    const data = await book.findById(id)
    if(data){
        await book.deleteOne({_id:id})
        res.send("Data Deleted Sucessfully...")
    }

}

const updateData=async(req ,res)=>{
    const id = req.params.id
    const {title , author,genre, publication,isbn} = req.body
    let data = await book.findById(id)
    if(data){
        data.title = title
        data.author = author
        data.publication = publication
        data.genre = genre
        data.isbn = isbn
        const updatedBookData = await data.save();
        res.send(updatedBookData)
    }
}
export {userData , donateBookData, getAllData , getDatabyId,deleteDataById , updateData}