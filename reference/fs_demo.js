const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world',err =>{
   if(err)throw err;
   console.log('file written to...');


fs.appendFile(path.join(__dirname,'test','hello.txt'), 'I Love Node.js', err =>{
      if(err) throw err;
      console.log('File appended to ....');
   
  
fs.rename(path.join(__dirname,'/test','hello.txt'),
path.join(__dirname,'/test','helloworld.txt'), err => {
     if(err)throw err;
     console.log('file renamed...');
   });
   });
  });
  


