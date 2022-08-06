'use strict'



// object 1
var id=999;
var Employee1=
{
employeeID:0,
fullName :"Ghazi Samer",  
department :"Administration",
level:"Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=2000; let min=1500;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee1.fullName}`);
console.log(`Employee1 salary:${Employee1.salary()}`);

// object 2

var Employee2=
{
employeeID:0,
fullName :"Lana Ali ",  
department :"Finance ",
level:"Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=2000; let min=1500;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee2.fullName}`);
console.log(`Employee1 salary:${Employee2.salary()}`);


// object 3

var Employee3=
{
employeeID:0,
fullName :"Tamara Ayoub ",  
department :"Marketing ",
level:"Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=2000; let min=1500;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee3.fullName}`);
console.log(`Employee1 salary:${Employee3.salary()}`);



// object 4

var Employee4=
{
employeeID:0,
fullName :"Safi Walid  ",  
department :"Adminstration ",
level:"Mid-Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=1500; let min=1000;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee4.fullName}`);
console.log(`Employee1 salary:${Employee4.salary()}`);



// object 5

var Employee5=
{
employeeID:0,
fullName :"Omar Zaid ",  
department :"Development ",
level:"Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=2000; let min=1500;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee5.fullName}`);
console.log(`Employee1 salary:${Employee5.salary()}`);



// object 6

var Employee6=
{
employeeID:0,
fullName :"Rana Saleh ",  
department :"Development ",
level:"Junior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=1000; let min=500;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee6.fullName}`);
console.log(`Employee1 salary:${Employee6.salary()}`);



// object 7

var Employee7=
{
employeeID:0,
fullName :"Hadi Ahmad ",  
department :"Finance ",
level:"Mid-Senior",
imgUrl: "",
netSalary:0,
uniqeID:function (c){id++;
    return this.employeeID=++c;},


 salary:function(){
let max=1500; let min=1000;
        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    },

}

console.log(`Employee1 name :${Employee7.fullName}`);
console.log(`Employee1 salary:${Employee7.salary()}`);