const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));

const port = 9090;

app.get('/',(req, res) =>{
    res.render(`index`);
});

app.use(express.urlencoded()); // the middleware that is used to parse the post body

app.post('/result',(req,res) =>{
    const name = req.body.nameText;
    const age = req.body.ageText;
    let content = "";
    if(!name && !age){
        content += "Please enter both your name and age!";
    }else{
        content = `Your name is ${name} and age is ${age}`;
    }
    res.render('result', {result:content}); 
});

app.listen(port, err =>{
    if(err) {
        console.log(err);
    }
    console.log(`My server is listening on port ${port}`);
});
