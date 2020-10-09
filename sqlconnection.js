const mysql=require('mysql');
var mysqlConnection =mysql.createConnection({
      host:"tehrifood.cimgrhuevowy.us-east-1.rds.amazonaws.com",
      user:"root",
      password:"rdbms123",
      database:"tehrifoodadmin",
      port:3306,       
}
	);

mysqlConnection.connect((err)=>{

	if(err)
		console.log("error in connection with database"+JSON.stringify(err));
       else
       	console.log("connection established");
}); 


module.exports=mysqlConnection;


