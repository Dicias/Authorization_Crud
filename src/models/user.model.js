import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true,
    trim: true
  },
  email : {
    type: String,
    required: true,
    trim: true, //elimina los espacios inecesarios " ejemplo     "
    unique: true,
  },
  password : {
    type: String,
    required: true,
  },
},
{
  timestamps: true, // recupera la fecha de creación/recuperación
}
)
export default mongoose.model('User', userSchema);