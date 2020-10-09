const express=require('express');
const router=express.Router();
//router.use(authD);
db=require('../sqlconnection.js');
router.post('/:status',async function(req,res){
status=req.params.status;
orderid=req.body.id;
db.query("SELECT stat from orders where orderId=?",orderid,(err,result)=>{
   var st=result[0].stat;
if(st==0&&status==1)
{db.query("update orders set stat=?, takenBy=? where orderId=? ",[status,req.body.dName,orderid],function(err,result){
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
  db.query("update  orders set stat=? where orderId=? ",[status,orderid],function(err,result){
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
);
});
module.exports=router;