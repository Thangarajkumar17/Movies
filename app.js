var express = require ("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movies');
var moviesSchema= mongoose.Schema({
	mName:String,
	hero:String,
	director:String,
	collections:Number
});
var Movies = mongoose.model("movies_list" , moviesSchema );
var movies1 = new Movies({"mName":"PPK222" ,"hero":"hari","director":"NewPerson",collections:100});
movies1.save(function(err,data){
	if(err){
		console.log("error", err);
	}else{
		console.log("data", data);
	}
});



var server = app.listen(1212);
console.log("server started");