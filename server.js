const express =require('express');
const app=express();
var bodyParser = require('body-parser')
const path = require('path');
db=require('./sqlconnection.js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public')) 
// parse application/json
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())
db.query("use tehrifoodadmin") 
app.post('/',async function(req,res){
console.log("dg");
res.send(req.body);
});
router=express.Router();
app.use(router);
app.use('/order',require('./routes/order'));
app.use('/fetch',require('./routes/fetchorder'));
app.use('/changeStatus',require('./routes/changestatus'));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/abhishek',function(req,res)
{
res.sendfile("./admin.html")
});
app.get('/dboy',function(req,res)
{
res.sendfile("./dboy.html");
});
app.listen(80);
