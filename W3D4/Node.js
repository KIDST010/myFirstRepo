const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  
   });
   var sum=0;
   var getNumber = function () {
    readline.question('enter a number', function (age) {
        if(age=="stop") {
            console.log(sum);
            readline.close();
        }
        else{             
              sum += parseInt(age);            
              getNumber();
        }             
    });
    
};
getNumber(); 
   