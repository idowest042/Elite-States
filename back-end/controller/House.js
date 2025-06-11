import houseModel from "../models/houseModel.js";
import {v2 as cloudinary} from "cloudinary"
import emailModel from "../models/Email.js";
export const createHouse = async (req, res) => {
    try {
        const {name,description,price,image,location,rooms} = req.body;
         const image1 =req.files.image1 && req.files.image1[0]
        const image2 =req.files.image2 && req.files.image2[0]
        const image3 =req.files.image3 && req.files.image3[0]
        const image4 =req.files.image4 && req.files.image4[0]
        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)
                let imageurl = await Promise.all(
                  images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                    return result.secure_url
                  })
                )
        const productData = {
            name,
            description,
            price:Number(price),
            image:imageurl,
            location,
            rooms
        }
        const house = new houseModel(productData);
         await house.save()
        res.status(200).json({msg:"product added successfully"})
        console.log(imageurl)
    } catch (error) {
        console.log('error in add house ',error.message);
        res.status(500).json({ msg: "error in addHouse" });
    }
}
export const getAllhouse = async (req,res) =>{
    try {
        const houses = await houseModel.find({});
        res.status(200).json(houses);
    } catch (error) {
        console.log('error in getAllhouse ',error.message);
        res.status(500).json({ msg: "error in getAllhouse" });
    }
}
export const getHouseById = async (req, res) => {
  try{
    const { id } = req.params;
    const house = await houseModel.findById(id);
    if (!house) {
      return res.status(404).json({ msg: "House not found" });
    }
    res.status(200).json(house);
  }catch(error){
    console.log('error in getHouseById ',error.message);
    res.status(500).json({ msg: "error in getHouseById" });
  }
}
export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await houseModel.findByIdAndDelete(id);
    if (!house) {
      return res.status(404).json({ msg: "House not found" });
    }
    res.status(200).json({ msg: "House deleted successfully" });
  } catch (error) {
    console.log('error in deleteHouse ', error.message);
    res.status(500).json({ msg: "error in deleteHouse" });
  }
}
export const sendEmail = async(req,res) =>{
  try{
   const {name,email,phone,message} = req.body
   const emailData= {
    name,
    email,
    phone,
    message
   }
   const newEmail = new emailModel(emailData)
   await newEmail.save()
   res.status(200).json({msg:"Message sent"})


  }catch(error){
    console.log('error in emailData ', error.message);
    res.status(500).json({msg:"server error"})
  }
}
export const getEmail = async(req,res) =>{
  try{
  const emails = await emailModel.find({});
  res.status(200).json(emails);
  }catch(error){
    res.status(500).json({msg:"server error"})
    console.log('error in getEmail ', error.message);
  }
}
export const getEmailId = async (req, res) => {
  try{
    const { id } = req.params;
    const email = await emailModel.findById(id);
    if (!email) {
      return res.status(404).json({ msg: "Email information not found" });
    }
    res.status(200).json(email);
  }catch(error){
    console.log('error in getEmailId ', error.message);
    res.status(500).json({ msg: "error in getEmailId" });
  }
}
export const deleteEmail = async(req,res) => {
  try{
  const { id } = req.params;
  const email = await emailModel.findByIdAndDelete(id);
  if (!email) {
    return res.status(404).json({ msg: "Email not found" });
  }
  res.status(200).json({ msg: "Email Information successfully" });
  }catch(error){
    console.log('error in deleteEmail ', error.message);
    res.status(500).json({ msg: "error in deleteEmail" });
  }
}