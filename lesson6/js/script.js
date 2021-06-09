function toggleMenu() {
    document.getElementById("navbar").classList.toggle("hide");
}
var day = document.getElementById("pancake");
var date = new Date();
var dayOfWeek = date.getDay();

if (dayOfWeek == 5){
    day.style.display = "block";
}
else{
    day.style.display = "none";
}

