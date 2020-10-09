exports.orderModel=function(o)
{
var x={
    latitude:o.latitude,
    longitude:o.longitude,
}
this.position=JSON.stringify(x);
this.phoneNo=o.phoneNo;
this.address=o.address;
this.shop=o.shop;
this.total=o.total;
this.username=o.username;
this.stat=0;
this.items=o.items;
}
exports.itemModel=function(o)
{
this.itemname=o.itemname;
this.itemprice=o.price;
this.quantity=1;
}






