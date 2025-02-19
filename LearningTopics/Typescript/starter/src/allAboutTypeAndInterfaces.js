"use strict";
const newEmp = {
    indId: 3436768,
    sector: "Security",
    isSalaried: true,
    LWD: Date.now().toString(),
};
function onBoardNewEmployee(emp) { }
// this is allowed
class SomeEmp {
    constructor(isSalaried, LWD) {
        this.LWD = LWD;
        this.isSalaried = isSalaried;
    }
}
