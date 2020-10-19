var sliderItems = document.querySelectorAll(".slider-item");
var controlButtons = document.querySelectorAll(".control-button");


var addSliderClickHandler = function (button,slide) {
    button.addEventListener("click", function(){
        for (var i=0; i < controlButtons.length; i++){ 
            sliderItems[i].classList.remove("slider-current");
            controlButtons[i].classList.remove("control-button-current");
        }
        slide.classList.add("slider-current");
        button.classList.add("control-button-current");
    });
};

for (var i = 0; i < controlButtons.length; i++){
   addSliderClickHandler(controlButtons[i],sliderItems[i]);
}
