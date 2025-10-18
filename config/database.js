import mongoose from "mongoose";

export const database = async () => {
    try {
        console.log("strating connection to mongodb...");

        const response = await mongoose.connect("mongodb://127.0.0.1:27017/misel123?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

        console.log(`connection successfully to mongodb at : ${response.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection faild");

        process.exit(1)
        
    }
}