// alert("hello");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelector("button")[i].addEventListener("click", () => {
        alert("I got clicked");
    });

}





