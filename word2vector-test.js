var w2v = require( 'word2vector' );

var modelFile = "data/model.bin";
w2v.load( modelFile );
console.log(w2v.getSimilarWords("颱風"));