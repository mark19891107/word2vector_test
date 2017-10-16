var columns = ["column1", "column2", "column3", "column4"];
var fs = require('fs')

require("csv-to-array")({
   file: "data/corpus.csv",
   columns: columns
}, function (err, array) {
    array.map(json=>{
        fs.appendFileSync("data/corpus.txt",json.column4.replace("\\r\\n","").replace("\'","")+"\n")
    })
});