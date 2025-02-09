const express=require('express');
const app=express();

const PORt=5000;

app.get('/',(req,res)=>{
    res.send('Hello! This is a simple express test server.');
});

app.listen(PORt,()=>{
    console.log(`Server is running on port ${PORt}`);
});