document.write("hi" + 8);

document.write(6>1);

document.write(7>11);

document.write (50==50); //checks if numbers are equal//

document.write(3==7);

F =5;
D =5;
document.write(F===D); //checks if equal in value and type//

document.write(5>2 && 80>8); //all need to be true to display//

document.write(6>10 || 14 >4); //one needs to be true to display//

function not_Function() {
    document.getElementById("Not").innerHTML =!(20>10);
}

function nan() {
    document.getElementById("test").innerHTML = 0/0;
}