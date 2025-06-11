import mongoose from "mongoose";
const houseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    image:{
        type:Array,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true,
    },
    rooms:{
        type:Number,
        required:true,
        trim:true,
    }

})
const houseModel = mongoose.models.house || mongoose.model("house", houseSchema);
export default houseModel;