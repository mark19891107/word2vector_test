var fs = require('fs')
var readline = require('readline');
var stream = require('stream');
var nodejieba = require("nodejieba");
nodejieba.load({
    userDict: 'dict.txt',
});

// var contents = fs.readFileSync('data/corpus.txt','utf8')

// contents.split("\n").map(content=>{
    
// })

var instream = fs.createReadStream('data/corpus.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
    var words = nodejieba.cut(line.replace(" ","").replace("\r\n",""))
    fs.appendFileSync("data/train.data",words.join(" ")+"\n")
});

rl.on('close', function() {
    instream.close();
});