var character = document.getElementById("character");
var block = document.getElementById("block")
// var scoreCounter = document.getElementById("scoreCounter")
function jump(){
    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var isDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 &&
        characterTop >= 130){
           block.style.animation = "none";
           block.style.display = "none";
            alert("u lose.")
    }
},10);





//    let el =  constructor (){
//     setInterval = 1000ms;
//     while (isDead !== true){
//         scoreCounter = setInterval;
//     }
//     }
//  function counter (time) {

//  }

// var scoreCounter = (time) => {
//     let count  = 0;
//     for(let key of time) {
//         time ++;
//     }
// }
// add a score counter
// distance travel || time === score.
