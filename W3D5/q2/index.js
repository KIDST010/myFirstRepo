const express = require('express');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());


app.use('/', (req, res) => {
res.send('<form action="/result" method="post">Name <input type="text" name="fname">Age <input type="text" name="age"><button type="submit">Submit Query</button></form>');
console.log(req.body);
});
app.listen(3000);