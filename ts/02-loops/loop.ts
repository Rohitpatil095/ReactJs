let mydata: number[] = [435,65,76,89,344]

for(let i: number=0;i<mydata.length;i++)
{
    console.log(mydata[i])
}

console.log("------ for of ------")
for(let data of mydata)
{
    console.log(data);
}

console.log("---------- for in -----------")
for(let i in mydata)
{
    console.log (`curremt i-> ${i} and data -> ${mydata[i]}`);
}


console.log("----- while loop------")

let counter:number =mydata.length;
while(counter>0)
{
    console.log(mydata[counter-1])
    counter-=1
}