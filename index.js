// LICENSE : MIT
"use strict";
var JSerStat = require("jser-stat").JSerStat;
var countByGroup = require("jser-stat").compute.countByGroup;
var stat = new JSerStat();

console.log("年月\tWebComponents\tReact\tAngularJS");
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
    var weeks = stat.getJSerWeeksBetWeen(beginDate, endDate);
    var tagCountByGroup = countByGroup(weeks, function (item) {
        if (beginDate.getFullYear() === 2015 && beginDate.getMonth() === 0) {
            console.log(endDate)
            console.log(item.title)
            if (/react/.test(item.title)) {
                debugger;
            }
        }
        var rank = {};
        item.tags.forEach(function (tag) {
            rank[tag] = ++rank[tag] || 1;
        });
        if (/react/i.test(item.title) || /react/i.test(item.content)) {
            rank["React"] = ++rank["React"] || 1;
        }
        if (/webcomponent/i.test(item.title) || /webcomponent/i.test(item.content)) {
            rank["WebComponents"] = ++rank["WebComponents"] || 1;
        }
        if (/polymer/i.test(item.title) || /polymer/i.test(item.content)) {
            rank["WebComponents"] = ++rank["WebComponents"] || 1;
        }

        if (/Angular/i.test(item.title) || /Angular/i.test(item.content)) {
            rank["AngularJS"] = ++rank["AngularJS"] || 1;
        }
        return rank;
    });
    //process.stdout.write("#" + weeks[0].weekNumber + " - #" + weeks[weeks.length - 1].weekNumber + ", ");
    process.stdout.write(beginDate.getFullYear() + "年" + (beginDate.getMonth() + 1) + "月" + "\t ");
    process.stdout.write(String((tagCountByGroup["WebComponents"] || 0)) + "\t");
    process.stdout.write(String((tagCountByGroup["React"] || 0)) + "\t");
    process.stdout.write(String((tagCountByGroup["AngularJS"] || 0)) + "\t");
    console.log("");
}
