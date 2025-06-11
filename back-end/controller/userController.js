import { generateToken } from "../config/utilis.js";
import user from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try{
        const {fullname,email,password} = req.body
        if(!fullname || !email || !password){
            res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await user.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }
        if(password.length < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await user.create({
            fullname,
            email,
            password: hashedPassword
        });
        if(newUser){
            // Generate token and set it in the response
            const token = generateToken(newUser._id, res);
            // Send success response
          return res.status(201).json({
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                token // Include the token in the response
            });    
        }else{
         return res.status(400).json({ message: "Invalid credentials" });   
        }
    }catch(error){
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const login = async (req, res) => {
    try{
    const { email, password } = req.body;
    const userData = await user.findOne({email})
    if(!userData){
        return res.status(400).json({ message: "User not found" });
    }
    const isCorrect = await bcrypt.compare(password, userData.password);
    if(!isCorrect){
        return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({
        id: userData._id,
        fullname: userData.fullname,
        email: userData.email,
        token: generateToken(userData._id, res) // Generate and include token
    });

    }catch(error){
        console.error("Error in login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logout:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}