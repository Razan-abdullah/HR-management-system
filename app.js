'use strict'
var id=999;
let main =document.getElementsByTagName("main");
function  constructor(Name,DEPartment,level,imgUrl){
this.employeeID =0;
this.fullName =Name;
this.department =DEPartment;
this.level=level;
this.imgUrl= imgUrl;
this.netSalary=0;
this.uniqeID=function(c){id++;
    return this.employeeID=++c;};
this.salary=function(){
    if (this.level==="Senior"){
    var max=2000; var min=1500;}

    if(this.level="Mid-Senior"){var max=1500;var min =1000;}
    
    else{var max=1000;var min =500;}

        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    }
 
    
    let div=document.createElement ("div");
    div.className="card";
main[0].appendChild(div);
    let img =document.createElement("img");
    img.src=this.imgUrl;
    div.appendChild(img);
    let p= document.createElement("p");
    p.innerHTML=`  Employee name :  ${this.fullName} - Department:${this.department}  - salary : ${this.salary()} .`;
div.appendChild(p);

}

// object 1
new constructor("Lana Ali","Finance","Senior","./Lana.jpg");
console.log("-----------------------------")

new constructor("Tamara Ayoub ","Marketing ","Senior","./Tamara.jpg");
console.log("-----------------------------")

new constructor("Safi Walid","Adminstration ","Mid-Senior","./Safi.jpg")

new constructor("Omar Zaid ","Development ","Senior","./Omar.jpg");
console.log("-----------------------------")

new constructor("Rana Saleh ","Development ","Junior","./Rana.jpg");
console.log("-----------------------------")

new constructor("Hadi Ahmad ","Finance ","Mid-Senior","./Hadi.jpg");