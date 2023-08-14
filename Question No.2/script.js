// Question No.2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var data = request.response
  var result = JSON.parse(data);
// for loop
  for(var i = 0; i < result.length; i++) {
        console.log(result[i].flags.png); 
  }
//for of loop =>
//   for(var obj of result){
//         console.log(obj.flags.png); 
  }

