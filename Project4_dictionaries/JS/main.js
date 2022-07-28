function my_dictionary() {
    var cat ={
        breed:"calico",
        color:"orange,white,black",
        age:"14",
        sound:"abeujnw",     
    };
    delete cat.age; //delete operator//
    document.getElementById("dic").innerHTML = cat.age;
}