const express = require('express'); 
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));

const port = 9090;

app.get('/', (req, res) => {
    const date = new Date();
    const hours = date.getHours();

    let style = "night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.render("index", {time: date.toTimeString(), choosenStyle: style});
});

app.listen(port, err =>{
    if(err){
        console.log("Error from server:::"+err);
    }
    console.log(`Server is running on port ${port}`);
});