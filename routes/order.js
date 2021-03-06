const express=require('express');
const router=express.Router();
//router.use(authU);
db=require('../sqlconnection.js');
model=require('../model.js');
addOrder=function(body,result)
{
var ord_M=new model.orderModel(body);
var item_M=new model.itemModel(body);

console.log(ord_M);
console.log(item_M);
db.query("insert into orders set ?",ord_M,async function(err,resul)
{
if(err)
	result(err,null);
else
{
result(null,resul);
}
})
}
router.get('/myorder/:phoneNo/:idd',async function(req,res){

 db.query("SELECT *,convert_tz(orderTime,'+00:00','+05:30') as ist  from orders where phoneNo=? and orderId=?",[req.params.phoneNo,req.params.idd],function(err,resu,field){
var tb=''
console.log(resu);
var item=resu[0];
if(item.takenBy==null)
item.takenBy="waiting for delivery boy"
if(resu.length==0)
res.send("NO Order Found");
 tb=tb+'<div style="padding:10px">'
     tb+='<div class="card">'
 tb+='<div class="card-header">'+item.orderId+'</div>'
  tb+='<div class="card-body">'
    tb+='<h5 class="card-title">'
          tb+='<table style="width:100%">'
     tb+='<tr><th>Restaurant</th> <th>Cost</th> <th>Ordered By</th> <th>Taken By</th> <th>Contact(D.Boy)</th> <th>Taken Time</th> <th>OrderTime</th><th>DeliveredTime</th> </tr>'
     tb+='<tr><td>'+item.shop+'</td> <td>'+item.total+'</td>  <td>'+item.username+'</td> <td>'+item.dName+'</td> <td>'+item.dPhone+'</td> <td>'+item.takenTime+'</td><td> '+item.ist+'</td> <td>'+item.deliveredTime+'</td></tr>'
    tb+='</table>'
       tb+= '</h5>'
   tb+=' <a href="'+item.directionLink+'" class="btn btn-primary">Order Location</a>'
  tb+='</div>'
tb+='</div>'
   tb+= '</div>';


	res.send(tb);
 });

});
router.post('/',async function(req,res){
  if(req.body.token!="asdf")
    res.send("token not valid");
  else{
  console.log("fghjkl")
  console.log(req.body.date);
  console.log(req.body.stat);
  var date=req.body.date+"%";
  var stat=req.body.stat;
  if(stat==0||stat==1||stat==2){
 db.query("SELECT *,convert_tz(orderTime,'+00:00','+05:30') as ist  from orders where orderTime like ? and stat=?",[date,stat],function(err,resu,field){

console.log(resu);
	res.json(resu);
 });
} 
else{
 db.query("SELECT *,convert_tz(orderTime,'+00:00','+05:30') as ist  from orders where orderTime like ? ",date,function(err,resu,field){


console.log(resu);
  res.json(resu);
 });

}


}
})


router.post('/post',async function(req,res)
{
	console.log("hey");
	console.log(req.body.phoneNo);
	//res.send(req.body);
addOrder(req.body,function(err,respo){

   if(!err)
    res.json(respo.insertId);
else{
console.log("theres error");
console.log(err);
   	res.json(0);
}

 });
//res.send("hello");
});

module.exports=router;