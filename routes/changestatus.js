const express=require('express');
const router=express.Router();
//router.use(authD);
db=require('../sqlconnection.js');
router.post('/:stat',async function(req,res){
var status=req.params.stat;
var orderid=req.body.orderId;
console.log("dboy came");
db.query("SELECT stat from orders where orderId=?",orderid,(err,result)=>{
  if(err)
   { console.log(err);  res.send({serverres:-1});   }
  else{

   var st=result[0].stat;
status=parseInt(status);
if(st==0&&status==1)
{ db.query("update orders set stat=?, takenBy=?,takenTime=convert_tz(current_timestamp,'+00:00','+05:30') where orderId=? ",[status,req.body.dToken,orderid],function(err,result){
     if(!err)  
   {
      res.send({serverres:1}); }
   else
   {console.log(err);
   res.send({serverres:-1}); }
});
    
}
else if(st==1&&status==2)
{
  console.log(status,orderid);
  db.query("update  orders set stat=? ,deliveredTime=convert_tz(current_timestamp,'+00:00','+05:30') where orderId=?  ",[status,orderid],function(err,result){
   if(!err)
   res.send({serverres:1});
   else
   res.send({serverres:-1});  
  });
   
}
else
{res.send({serverres:0});
}
}
}
);
});
module.exports=router;