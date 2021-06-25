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

//var date = new Date();
//document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("output").innerHTML = "Last Updated " + document.lastModified;


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};


const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
}
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
var today = window.localStorage.getItem("date");
// Initialize the date object as a date object again here
date = new Date(date);
date.setDate(date.getDate() + 7);
var current = date.getTime();

if (!localStorage.getItem("lastVisited1")) {
    localStorage.setItem("lastVisited1", current);
    document.getElementById("lastVisit").innerHTML = 0;
}
else{
    var previousVisit = localStorage.getItem("lastVisited1");
    localStorage.setItem("lastVisited1", current);
    var diff = Math.floor((current - previousVisit) / (1000*60*24));
    document.getElementById("lastVisit").innerHTML = diff;
}
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#stormList');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


