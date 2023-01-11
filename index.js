
let child_drum = document.getElementsByClassName("child-drum");
for(let i=0;i<child_drum.length;i++){
    child_drum[i].addEventListener("click",clicksound);
    function clicksound() {
        // console.log('hello');
        let keyText= this.innerText
        sound(keyText);

        // console.log(key);

        // let key=
    }
}
document.addEventListener("keypress",function(event){
    // console.log(event);
  let key=event.key;
  sound(key);
    // console.log(key);
});
// function keypresssound(event) {
//     console.log('hello');
//   
// }
function sound(key) {
    // console.log('hello');
    console.log(key);
    if(key=='w'){
        let w= new Audio("sound/crash.mp3");
        w.play();
    }
    if(key=='a'){
        let w= new Audio("sound/tom-2.mp3");
        w.play();
    }
    if(key=='s'){
        let w= new Audio("sound/tom-3.mp3");
        w.play();
    }
    if(key=='d'){
        let w= new Audio("sound/tom-1.mp3");
        w.play();
    }
    if(key=='j'){
        let w= new Audio("sound/snare.mp3");
        w.play();
    }
    if(key=='k'){
        let w= new Audio("sound/tom-4.mp3");
        w.play();
    }
    if(key=='l'){
        let w= new Audio("sound/kick-bass.mp3");
        w.play();
    }
    
}