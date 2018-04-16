var total= prompt("enter a number");
for(var num=1; num<=total; num++);{
  total= total + 1
}
console.log("The total is "+ total);
//-----------------------------------------//

var a= prompt("do you want to play");
do{ 
  var b= prompt("write a word");
  var c= prompt("do you want to play again");
   }while(c!=='no');
 
console.log(b);

//-------------------------------------------------//

var print=prompt("would you like to print your name");
while(print==="yes"){
  var name= prompt("What is your name?");
  var print=prompt("would you like to print again?");
  console.log("Hello my name is "+name);
}
 


//--------------------------------------------------//

 var a= prompt("what time of day is it?");
 if(a==="morning")
 {
   console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
 }else if(a==="noon"){
   console.log("Since it is noon you should be eating lunch. We suggest a salad.");
 }else{
   console.log("Since it is evening you should be eating dinner. We suggest chicken and rice.");
 }