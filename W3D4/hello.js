const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('how old are you?', age => {
        if(age>16) {console.log("You’re allowed to get a drivers license in Iowa");}
        else { console.log("You’re NOT allowed to get a drivers license in Iowa");}
        readline.close();
    });
   });
   
  