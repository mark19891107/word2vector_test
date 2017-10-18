測試使用 Word2Vector
--------------------

# 注意
- 因為裡面 word2vector 套件據作者宣稱 windows 不能執行，所以這邊的 code 也不能在 windows 上 run
- 因為 word2vector 套件的作者將編譯好的 word2vec 執行檔包在套件裡，所以我們必須自行編譯才能順利執行
  * cd node\_modules/word2vector/src
  * make clean
  * make
  * ./word2vec 若有彈出word2vector 的參數說明，表示可以執行


### 事前準備

1. 安裝 nodejs
2. clone 這個 github repo.
2. 創建 data 資料夾
3. 準備訓練的檔案內容
    * 一行一篇文章，只保留內文，其他資訊全部不需要
    * 儲存在data資料夾底下，並命名為「corpus.txt」

### model 訓練

1. node cut.js
    * 讀取 data/corpus.txt 使用 jieba 斷詞
    * 斷詞採用 dict.txt 字典檔，有特殊詞請在此加入（ex:一例一休）
    * 斷完結果會儲存在 data/train.data
2. node word2vector.js
    * 訓練 word2vetor 模型
    * 參數調整可參考[這邊](http://blog.csdn.net/szlcw1/article/details/52751314)
    * 訓練完模型會存在 data/model.bin

### 相關詞查詢

1. 打開 word2vector-test.js 
2. 修改裡面的關鍵字（預設為「颱風」）
3. 執行 node word2vector-test.js
    * 畫面上輸出的即是相關詞以及它們的相似度
