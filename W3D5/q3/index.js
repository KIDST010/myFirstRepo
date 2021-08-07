const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="css/day.css" rel="stylesheet"> <link href="css/night.css" rel="stylesheet"><title>Document</title></head><body><form action="/result" method="post">Name <input type="text" name="fname">Age <input type="text" name="age"><button type="submit">Submit Query</button></form></bod></html>');
   
  });
const date=new Date();
const hour = date.getHours();
const path = require('path');
if (hour >= 6 && hour <= 18) {
    app.use('/css', express.static(path.join(__dirname,'css','day.css')));
  }
  else{
    app.use('/css', express.static(path.join(__dirname,'css','night.css')));
  }
  app.use(express.urlencoded())
  app.post('/result',(req,res)=>{
      let name=req.body.fname;
      let age=req.body.age;
      let answer=" ";
      if(!name && !age) {answer+="enter a valid name and age";}
      else {answer+="name:" + name + "  age:" + age ;}
      res.send(answer);
  });
  
 
app.listen(3000);



