function count10() {
    var digit="";
    var x=1;
    while (x<11) {
        digit+= "<br>" + x;
        x++
        }
        document.getElementById("count").innerHTML=digit;
}