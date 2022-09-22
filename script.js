// getting the batches
var b_15 = document.getElementById("b_2015");
var b_16 = document.getElementById("b_2016");

// getting the buttons
var btn_15 = document.getElementById("btn_2015");
var btn_16 = document.getElementById("btn_2016");

// functions
function fun_2015(){
    b_15.style.transform = "translateX(0%)"
    b_16.style.transform = "translateX(110%)"
    btn_15.classList.add("active")
    btn_16.classList.remove("active")
}
function fun_2016(){
    b_16.style.transform = "translateX(0%)"
    b_15.style.transform = "translateX(110%)"
    btn_16.classList.add("active")
    btn_15.classList.remove("active")
}