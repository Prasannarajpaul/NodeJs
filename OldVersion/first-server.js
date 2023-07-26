var http = require('http'); //variable declaration - rewuire (protocol) require to import a module as same as exports in module
var imp=require('./first_module');

http.createServer(function (req, res){//manually creating a server
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.end('Hi Guys');
    res.write(imp.myDate());
    res.end();//respones has ended load the page
}).listen(3000);//0<port<6536

var imp2=require('./second_module')
const msg=imp2.msg();
console.log(msg);//to write on console
