const express=require('express');
const router=express.Router();
//router.use(authD);
db=require('../sqlconnection.js');
router.get('/:stat/:token',async function(req,res)
{
   console.log("FETCH REQUEST CAME");
   var status=req.params.stat;
   var token=req.params.token;
    if(status==0){
db.query("SELECT * from orders where date(orderTime)=current_date and stat=?",status,function(err,result){
   console.log(result);
   console.log(status);
   res.send(result);
})

}
 if(status==1||status==2)
 {
 db.query("SELECT * from orders where date(orderTime)=current_date and stat=? and takenBy=?",[status,token],function(err,result){
   res.send(result);
});	
 }
});
module.exports=router;