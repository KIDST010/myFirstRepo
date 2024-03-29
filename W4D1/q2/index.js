const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
app.use(session({secret: 'salt for cookie signing'}))

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'view'));


app.get('/',(req, res) =>{
    res.render('formTemplate');
});

app.use(express.urlencoded()); 

app.post('/result',(req,res) =>{ 
    const sessionData = req.session;
    sessionData.name = req.body.nameText;
    sessionData.age = req.body.ageText;
    res.redirect(303,'/output');
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;

    let content = `Welcome: `;
    if (!name && !age) {
        content += "name and age is not entered.";
    }else{
        content += `${name} with age ${age}`;
    }
    res.send(content);
});

app.listen(3000);
