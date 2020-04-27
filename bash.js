// Output prompt
const pwd = require('./pwd');
const ls = require('./ls');
process.stdout.write('prompt > ');

//stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data)=> {
  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    pwd();
    process.stdout.write('\nprompt > ');
  }
  else if(cmd === 'ls'){
    ls();
  }
  else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
  // process.stdout.write('\nprompt > ');


});
