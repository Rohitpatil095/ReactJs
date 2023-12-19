var mydata = [435, 65, 76, 89, 344];
for (var i = 0; i < mydata.length; i++) {
    console.log(mydata[i]);
}
console.log("------ for of ------");
for (var _i = 0, mydata_1 = mydata; _i < mydata_1.length; _i++) {
    var data = mydata_1[_i];
    console.log(data);
}
console.log("---------- for in -----------");
for (var i in mydata) {
    console.log("curremt i-> ".concat(i, " and data -> ").concat(mydata[i]));
}
console.log("----- while loop------");
var counter = mydata.length;
while (counter > 0) {
    console.log(mydata[counter - 1]);
    counter -= 1;
}
