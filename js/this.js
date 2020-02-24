function display1() {
    let inputNumber1 = parseInt(document.getElementById("inputNumber1").value);
    let index;
    for (index=0;index<inputNumber1;index++){
        document.getElementById("result1").innerHTML += "The Number is: "+ index + "<br>";
    }
}

function display2() {
    let inputNumber2 = parseInt(document.getElementById("inputNumber2").value);
    let result=0;
    let index;
    for (index=1;index<=inputNumber2;index++){
        result +=index;
    }
    document.getElementById("result2").innerHTML += "The Summary is: "+ result + "<br>";
}