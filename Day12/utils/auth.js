const jwt=require("jsonwebtoken")

exports.authVerify= async (req,res,next)=>{
try {
     const auth=req.headers.authorization;

 if(!auth){
return res.status(400).json({messsage:"Auth is requierd"})
 }

 console.log(auth.split(" ")[1])
 const token=auth.split(" ")[1]
 const decode=jwt.verify(token, "abcd")
console.log(decode)
 req.user= decode

 next()
} catch (error) {
    console.log(error)
}

}