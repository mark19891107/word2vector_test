var fs = require('fs')
var nodejieba = require("nodejieba");
nodejieba.load({
    userDict: 'dict.txt',
});

var contents = fs.readFileSync('data/corpus.txt','utf8')

contents.split("\n").map(content=>{
    var words = nodejieba.cut(content.replace(" ","").replace("\r\n",""))
    fs.appendFileSync("data/train.data",words.join(" ")+"\n")
})


// var result = nodejieba.cut("我國已邁入高齡化社會，常有納稅義務人詢問，家中年邁雙親因患慢性疾病又行動不便");
// console.log(result);