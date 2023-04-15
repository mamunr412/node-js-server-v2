import userRoutes from './routers/usersRoute.js'

const express = require("express");
const cors = require('cors');

const port = 5000
const app= express();


app.use(cors());
app.use(express.json());

app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('server is live')
})



app.listen(port,()=>{
    console.log('listining to port', port)
})