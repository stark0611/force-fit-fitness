// let menuBox = document.getElementById("menuBox");
// let menuIcon = document.getElementById("menuIcon");





// menuIcon.onclick = function(){
//     menuBox.classList.toggle("open-menu");

//     if(menuBox.classList.contains("open-menu")){
//         menuIcon.src = "images/close.png";
//     }
//     else{
//         menuIcon.src = "images/menu.png";
//     }
// }





// let textBox = document.getElementById("textBox");

// menuIcon.onclick = function(){
//     menuBox.classList.toggle("open-menu");

//     if(menuBox.classList.contains("open-menu")){
//         menuIcon.src = "images/close.png";
//         textBox.style.display = "none";
//     }
//     else{
//         menuIcon.src = "images/menu.png";
//         textBox.style.display = "";
//     }
    
// }






let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showfeedback(){
    for(userPic of userPics ){
    userPic.classList.remove("active-pic");
    }

    for(userText of userTexts){
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");

}
