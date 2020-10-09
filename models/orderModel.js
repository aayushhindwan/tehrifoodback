exports.orderModel=function(o)
{
this.phoneNo=o.phoneNo;
this.address=o.address;//this.timeStamp=date();
this.shop=o.shop;
this.total=o.total;
this.username=o.username;
this.status=0;
this.takenBy=null;
this.takenTime:null;
this.delieveredTime:null;
}
exports.itemModel=function(o)
{
this.itemname=o.itemname;
this.itemprice=o.price;
this.quantity=1;
}






