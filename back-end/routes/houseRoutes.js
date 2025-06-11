import express from 'express';
import { createHouse, deleteEmail, deleteHouse, getAllhouse, getEmail, getEmailId, getHouseById, sendEmail } from '../controller/House.js';
import { upload } from "../middleware/multer.js";
const router = express.Router();
router.post('/addhouse',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1},]), createHouse)
router.get('/getallhouse', getAllhouse)
router.get('/gethouse/:id', getHouseById)
router.delete('/deletehouse/:id', deleteHouse)
router.post('/contact',sendEmail)
router.get('/info',getEmail)
router.get('/info/:id',getEmailId)
router.delete('/deleteemail/:id',deleteEmail)
export default router;