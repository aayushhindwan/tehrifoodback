const express=require('express');
const router=express.Router();
//router.use(authD);
db=require('../sqlconnection.js');
router.get('/all',async function(req,res)
{
   console.log("FETCH REQUEST CAME");
    var date ="2020-10-01%";
db.query("SELECT * from orders where orderTime like ? ",date,function(err,result){

    res.send(result);
})
});
router.get('/delievered:token',async function(req,res)
{
    
});
router.get('/taken',async function(req,res)
{

});
router.get('/nottaken',async function(req,res)
{

});
module.exports=router;