var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this && coll[j].classList.contains("active")) {
        coll[j].classList.remove("active");
        coll[j].nextElementSibling.style.display = "none";
      }
    }
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}