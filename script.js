const button = document.querySelector('.clicker');
const outerbox = document.querySelector('.outerbox');
// const body = document.querySelector('body');
console.log(button.innerHTML)

function setRandomColor(element){
    element.background = getRandomColor();
}
function getRandomColor(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let d = Math.floor(Math.random() * 256);
    let e = Math.floor(Math.random() * 256);
    let f = Math.floor(Math.random() * 256);
    let left = 'rgb(' + a + ',' + b + ',' + c + ')';
    let right = 'rgb(' + d + ',' + e + ',' + f + ')';

    return "linear-gradient(to left," + left + "," + right + ")";
}
function countdown(seconds){
    let output = document.querySelector('.seconds');
    console.log("seconds: " + seconds);
    if(seconds > 500){
        window.alert("its way too much time");
    }
    else{
        for(let i=seconds;i>=0;i--){
            if(i == 0){
                setTimeout(function(){ 
                    output.innerHTML = "BOOM!!";
                    setRandomColor(document.body.style);
                    // setRandomColor(outerbox.style);
                 },(seconds - i)*1000); 
            }
            else{
                setTimeout(function(){ 
                    output.innerHTML = "" + i +" ";
                    setRandomColor(document.body.style);
                    // setRandomColor(outerbox.style);
                },(seconds - i)*1000);
            }
        }
        console.log("yo");
        
    }
    
}

window.onload = function(){
    button.addEventListener('click',function(){
        const seconds = document.querySelector('.inp').value;
        countdown(parseInt(seconds));
       
    });
}

