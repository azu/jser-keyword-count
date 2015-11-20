// LICENSE : MIT
"use strict";
var JSerStat = require("jser-stat").JSerStat;
var countByGroup = require("jser-stat").compute.countByGroup;
var stat = new JSerStat();

console.log("年月\Grunt\tgulp");
for (var i = 0; i < 12; i++) {
    var beginDate = new Date(2014, i, 1);
    var endDate = new Date(2014, i + 1, 1);
    con(beginDate, endDate);
}
for (var i = 0; i < 11; i++) {
    var beginDate = new Date(2015, i, 1);
    var endDate = new Date(2015, i + 1, 2);
    con(beginDate, endDate);
}
function con(beginDate, endDate) {
    var rank = {};
    var items = stat.getItemsBetWeen(beginDate, endDate);
    items.forEach(function (item) {
        item.tags.forEach(function (tag) {
            rank[tag] = ++rank[tag] || 1;
        });
        var npm = /npm/i;
        var bower = /bower/i;
        if (bower.test(item.title) || bower.test(item.content)) {
            rank["Grunt"] = ++rank["Grunt"] || 1;
        }
        if (npm.test(item.title) || npm.test(item.content)) {
            rank["gulp"] = ++rank["gulp"] || 1;
        }
    });
    //process.stdout.write("#" + weeks[0].weekNumber + " - #" + weeks[weeks.length - 1].weekNumber + ", ");
    process.stdout.write(beginDate.getFullYear() + "年" + (beginDate.getMonth() + 1) + "月" + "\t ");
    process.stdout.write(String((rank["Grunt"] || 0)) + "\t");
    process.stdout.write(String((rank["gulp"] || 0)) + "\t");
    console.log("");
}
