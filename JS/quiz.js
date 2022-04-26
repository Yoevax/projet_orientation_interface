let correct = document.getElementsByClassName("correct");

function reponse(){
    for(let i =0; i<correct.length; i++){
        correct[i].style.color = "white";
        correct[i].style.fontWeight = "bold";
        correct[i].style.backgroundColor = "green";
}
window.scrollTo(0, 0);
}


