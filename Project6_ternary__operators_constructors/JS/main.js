document.write(bigger=(5>1)?"Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height =document.getElementById("Height").value;
    Can_ride =(Height<52)? "You are too short" : "You are sorta tall enough ";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride";
}

function age_Function() { 
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote=(age<18)? "You are too young to vote" : "You are old enough ";
    document.getElementById("vote").innerHTML=Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) { //vehicle display//
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("dodge", "viper", 2020, "red");
var Emily= new Vehicle("jeep", "trail hawk", 2019, "white and black");
var Erik= new Vehicle("ford", " pinto", 1971, "mustard yellow");
function myFunction(){
    document.getElementById("key").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model
    +" manufacutred in " + Erik.Vehicle_Year;
}

function count_Function() { //count function//
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point=9;
        function plus_one() {starting_point +=1;}
        plus_one();
        return starting_point;
    }
}