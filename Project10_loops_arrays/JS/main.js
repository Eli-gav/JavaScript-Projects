function count_to_ten() { //count function//
    var digit="";
    var x =1;
    while(x<11) {
        digit +="<br>" + x;
        x++;
    }
    document.getElementById("counting").innerHTML=digit;
}

//loop function//
function call_loop() {
    let text="";
    let a=1;
    while(a<5) {
        text += "The number is " + a;
        a++;
    }
    document.getElementById("loop").innerHTML=text;
}


//length//

let text="Good morning!";
let length=text.length;
document.getElementById("len").innerHTML=length;

//for loop//
var intruments=["Guitar", "Drums", "Piano", "Bass", "Flute"];
var content="";
var y;
function for_loop(){
    for (y=0;y<intruments.length;y++) {
        content += intruments[y] + "<br>";
    }
    document.getElementById("list_of_intruments").innerHTML=content;
}

//array and obj//
function cat_pics() {
    var cat_picture=[];
    cat_picture[0]="sleeping";
    cat_picture[1]="playing";
    cat_picture[2]="eating";
    cat_picture[3]="purring";
    document.getElementById("cat").innerHTML="In this picture the cat is " +
    cat_picture[2] + ".";
 }

 function array_f() {
    var color=[];
    color[0]="red";
    color[1]="aqua";
    color[2]="marine";
    color[3]="violet";
    document.getElementById("array").innerHTML="The color is " + 
    color[3] + ".";
 }

 //CONSTNT//
 function con_f() {
    const musical_intrument={type:"guitar", brand:"fender", color:"black"};
    musical_intrument.color="blue";
    musical_intrument.price="900$"
    document.getElementById("constant").innerHTML= "The cost of the " + 
    musical_intrument.type + " was" + musical_intrument.price;
}

//return//////

function return_f() {
    return "9 return";
}
document.getElementById("return").innerHTML=return_f();

//OBJ////
let car = {
    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML=car.description();

// break//
let texts = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) { break; }
  texts += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML=texts;

//continue//
let textz = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  textz += "The number is " + i + "<br>";
}
document.getElementById("con").innerHTML = textz;