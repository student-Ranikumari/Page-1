document.getElementById("image").addEventListener("mouseover", function() {
    this.classList.add("rotate-left");
});

document.getElementById("image").addEventListener("mouseout", function() {
    this.classList.remove("rotate-left");
});