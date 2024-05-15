




//adding image attribute to all the drum

console.log(document.querySelectorAll(".drum"));
let list = document.querySelectorAll(".drum");



for (let i = 0; i < list.length; i++){
    console.log(list[i]);
    
    switch (list[i].innerText) {
        case 'w':
            list[i].style.backgroundImage = "url('./images/crash.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
            });
            break;
        case 'a':
            list[i].style.backgroundImage = "url('./images/kick.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
            });
            break;
        case 's':
            list[i].style.backgroundImage = "url('./images/snare.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
            });
            break;
        case 'd':
            list[i].style.backgroundImage = "url('./images/tom1.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
            });
            break;
        case 'j':
            list[i].style.backgroundImage = "url('./images/tom2.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
            });
            break;
        case 'k':
            list[i].style.backgroundImage = "url('./images/tom3.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
            });
            break;
        case 'l':
            list[i].style.backgroundImage = "url('./images/tom4.png')";
            list[i].addEventListener("click", function () {
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
            });
            break;
    }    
}


//adding a keyboard event listeneer


document.addEventListener("keypress", (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'w':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
            
            break;
        case 'a':
            
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
            
            break;
        case 's':
            
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
            
            break;
        case 'd':
            
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
            
            break;
        case 'j':
          
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
           
            break;
        case 'k':
         
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
      
            break;
        case 'l':
            
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
           
            break;
    }
})


