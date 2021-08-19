
for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        console.log(text);

        AnimationPlay(text);

    });
}

document.addEventListener("keypress",function(event){
  var text=event.key;
  AnimationPlay(text);
});

function AnimationPlay(text) {
   var selectedbutton= document.querySelector("."+text);
   selectedbutton.classList.add("animation");

   setTimeout(function(){
       selectedbutton.classList.remove("animation");
   },250);
}
