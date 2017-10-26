const folder = 'data/news';
const mergedFile = 'data/corpus.txt'
const fs = require('fs');

fs.readdir(folder, (err, files) => {
    files.forEach(mergeFile);
})

function mergeFile(file) {
    var content = fs.readFileSync(folder+'/'+file,'utf8');
    content.split('\n').forEach(line=>{
        if(!line.startsWith('{')){
            fs.appendFileSync(mergedFile,line+"\n")
        }
    });
    console.log(file + " " + content.split('\n').length);
}