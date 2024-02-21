import mongoose from "mongoose";
import 'dotenv/config';

export const connectDb = async() =>{
  try{

//await mongoose.connect(process.env.MONGODB_URI);
await mongoose.connect('mongodb+srv://dmacias26:26KPJUNAxbCApPrk@heliucluster.kfrt565.mongodb.net/?retryWrites=true&w=majority')
console.log('Database connected 👍');
  }
  catch(error){
    console.log(error)
  };
};
