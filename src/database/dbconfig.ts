import mongoose from "mongoose";

export const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('Mongodb connected successfully');
        })

        connection.on('error', () => {
            console.log('Mongodb connection error');
            process.exit
        })
    } catch (error) {
        console.log('something went wrong', error);
        
    }
}