var w2v = require( 'word2vector' );
// var w2v = require("./lib");
var trainFile = "./data/train.data",
    modelFile = "./data/model.bin";
		w2v.train(trainFile, modelFile, {
			cbow: 1,           // use the continuous bag of words model //default 
			size: 100,          // sets the size (dimension) of word vectors // default 100 
			window: 8,         // sets maximal skip length between words // default 5 
			binary: 1,         // save the resulting vectors in binary mode // default off 
			negative: 25,      // number of negative examples; common values are 3 - 10 (0 = not used) // default 5 
			hs: 0,             // 1 = use  Hierarchical Softmax // default 0 
			sample: 1e-4,      
			threads: 20,
			iter: 15,
			minCount: 5,       // This will discard words that appear less than *minCount* times // default 5 
			logOn: false       // sets whether any output should be printed to the console // default false 
		});