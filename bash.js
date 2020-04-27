const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');



const done = (output) => {
    process.stdout.write(output)
    process.stdout.write("\nprompt > ")
};
// Output prompt
process.stdout.write('prompt > ');

//stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data)=> {
    let args = data.toString().trim().split(' ');

    if(args[0] === 'pwd'){
        pwd(done);
    }
    else if(args[0] === 'ls'){
        ls(done);
    }
    else if (args[0] === 'cat') {
        cat(done, args[1])
    }
    else if (args[0] === 'curl') {
        curl(done, args[1]);
    }
    else if (args[0] === 'echo') {
        done(args[0]);
    }
    else{
        done('You typed: ' + args[0]);
    }

});
