import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
})
const user = mongoose.models.user || mongoose.model("user", userSchema);
export default user;