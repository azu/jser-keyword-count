[jser/stat-js](https://github.com/jser/stat-js "jser/stat-js") を使ったJSer.infoの出現キーワード調査スクリプト

あると便利なの : [philovivero/distribution](https://github.com/philovivero/distribution "philovivero/distribution")

### 特定キーワードの比較

```sh
$ node index.js
年月	WebComponents	React	AngularJS
2014年1月	 0	1	5	
2014年2月	 0	4	10	
2014年3月	 0	2	6	
2014年4月	 1	1	3	
2014年5月	 6	2	4	
2014年6月	 9	2	6	
2014年7月	 11	3	12	
2014年8月	 4	1	7	
2014年9月	 2	10	7	
2014年10月	 9	27	24	
2014年11月	 3	19	6	
2014年12月	 4	6	2	
2015年1月	 2	7	3	
2015年2月	 0	24	7	
2015年3月	 1	25	9	
2015年4月	 0	16	2	
2015年5月	 5	8	6	
2015年6月	 2	10	0	
```

### キーワードランキング

```sh
$ node keyword-lines.js | distribution --char=ba --height=35
           Key|Ct  (Pct)    Histogram
    JavaScript|340 (23.40%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
       library|138  (9.50%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   ReleaseNote|117  (8.05%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
         Tools| 69  (4.75%) ▬▬▬▬▬▬▬▬▬▬▬
    ECMAScript| 59  (4.06%) ▬▬▬▬▬▬▬▬▬
       node.js| 39  (2.68%) ▬▬▬▬▬▬
  presentation| 37  (2.55%) ▬▬▬▬▬▬
         React| 35  (2.41%) ▬▬▬▬▬▬
       testing| 33  (2.27%) ▬▬▬▬▬
           CSS| 30  (2.06%) ▬▬▬▬▬
       browser| 28  (1.93%) ▬▬▬▬▬
       Summary| 25  (1.72%) ▬▬▬▬
          book| 19  (1.31%) ▬▬▬
      tutorial| 18  (1.24%) ▬▬▬
         movie| 16  (1.10%) ▬▬▬
           DOM| 14  (0.96%) ▬▬▬
     AngularJS| 14  (0.96%) ▬▬▬
           npm| 14  (0.96%) ▬▬▬
   performance| 13  (0.89%) ▬▬
          Flux| 13  (0.89%) ▬▬
        Chrome| 12  (0.83%) ▬▬
    TypeScript| 11  (0.76%) ▬▬
           AST| 11  (0.76%) ▬▬
          spec| 11  (0.76%) ▬▬
         debug| 11  (0.76%) ▬▬
            IE| 10  (0.69%) ▬▬
          HTML|  9  (0.62%) ▬▬
      Promises|  8  (0.55%) ▬▬
        jQuery|  7  (0.48%) ▬▬
       firefox|  7  (0.48%) ▬▬
WebPlatformAPI|  7  (0.48%) ▬▬
      flowtype|  7  (0.48%) ▬▬
        Events|  7  (0.48%) ▬▬
  CoffeeScript|  7  (0.48%) ▬▬
   translation|  7  (0.48%) ▬▬
```

