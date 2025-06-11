import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true,
     trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
        trim:true
    }

})
const emailModel = mongoose.models.email || mongoose.model("email", emailSchema);
export default emailModel