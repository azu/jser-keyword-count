// LICENSE : MIT
"use strict";
var JSerStat = require("jser-stat").JSerStat;
var countByGroup = require("jser-stat").compute.countByGroup;
var stat = new JSerStat();
var beginDate = new Date(2015, 0, 1);
var endDate = new Date(2015, 5, 1);
var weeks = stat.getJSerWeeksBetWeen(beginDate, endDate);
function convertJaToEn(str) {
    return str.replace("まとめ", "Summary")
        .replace("スライド", "presentation")
        .replace("動画", "movie")
        .replace("翻訳", "translation")
        .replace("イベント", "Events")
}
weeks.forEach(function (week) {
    week.items.forEach(function (item) {
        item.tags.forEach(function (tag) {
            console.log(convertJaToEn(tag));
        })
    });
});
