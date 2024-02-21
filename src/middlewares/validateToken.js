import jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
export const authRequired = (req, res, next) => {
const { token }= req.cookies;

if(!next) return res.status(401).json({message: "Authorization denied"});

jwt.verify(token, TOKEN_SECRET, (error, user)=>{
  if(error) return res.status(403).json({message: "Invalid Token"});
  req.user = user;
  next();
})

};