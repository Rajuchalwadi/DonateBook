import express from "express";
import { userData , donateBookData ,getAllData ,getDatabyId,deleteDataById,updateData} from "../Controller/donateBookController.js";
const router = express.Router()
router.route('/add').post(userData)
router.route('/add/donate/book').post(donateBookData)
router.route('/get').get(getAllData)
router.route('/get/:id').get(getDatabyId)
router.route('/delete/:id').delete(deleteDataById)
router.route('/update/data/:id').put(updateData)


export default router