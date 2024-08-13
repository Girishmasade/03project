import mongoose from "mongoose";

export const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', ()=>{

        })
    } catch (error) {
        
    }
}