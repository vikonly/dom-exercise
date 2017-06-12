//Task 1

var tagline =  document.getElementById("tag-line");
console.log("tagline:", tagline);

var headings = document.querySelectorAll(".bg-main-content h2");
console.log("headings:", headings);

var collect = tagline.innerHTML + "\n--------------------------------------------";
console.log("collect:", collect);


for( var i = 0; i < headings.length; i += 1) {
    collect += "\n" + headings[i].innerHTML;
}

alert(collect);

//Task 2:
var box = document.querySelectorAll(".bg-main-content .box");
console.log("box:", box);

var when_to_launch = box[12]; 

var scoop = when_to_launch.children;

var collect = scoop[0].innerHTML + "\n-----------------------";
console.log("collect:", collect);

for (var i = 1; i < scoop.length; i += 1) {
    collect += "\n\n" + scoop[i].innerHTML;
}

alert(collect);