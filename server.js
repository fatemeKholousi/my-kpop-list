const express=require("express")

const app=express()

app.get('/',(req,res)=>{res.json({msg:"Welcome to my world my show!"})})

// define routes
app.use('/api/users',require("./routes/users"))
app.use('/api/auth',require("./routes/auth"))
app.use('/api/lists',require("./routes/lists"))

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`connected to ${PORT}`))