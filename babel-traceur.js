// LICENSE : MIT
"use strict";
var JSerStat = require("jser-stat").JSerStat;
var countByGroup = require("jser-stat").compute.countByGroup;
var stat = new JSerStat();

console.log("年月\tBabel\tTraceur");
for (var i = 0; i < 12; i++) {
    var beginDate = new Date(2014, i, 1);
    var endDate = new Date(2014, i + 1, 1);
    con(beginDate, endDate);
}
for (var i = 0; i < 6; i++) {
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
        var babel = /react/i;
        var traceur = /traceur/i;
        if (babel.test(item.title) || babel.test(item.content)) {
            rank["Babel"] = ++rank["Babel"] || 1;
        }
        if (traceur.test(item.title) || traceur.test(item.content)) {
            rank["Traceur"] = ++rank["Traceur"] || 1;
        }
    });
    //process.stdout.write("#" + weeks[0].weekNumber + " - #" + weeks[weeks.length - 1].weekNumber + ", ");
    process.stdout.write(beginDate.getFullYear() + "年" + (beginDate.getMonth() + 1) + "月" + "\t ");
    process.stdout.write(String((rank["Babel"] || 0)) + "\t");
    process.stdout.write(String((rank["Traceur"] || 0)) + "\t");
    console.log("");
}
