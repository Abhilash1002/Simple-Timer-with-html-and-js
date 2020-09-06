const button = document.querySelector('.clicker');
const body = document.querySelector('body');
console.log(button.innerHTML)

function getRandomColor(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return 'rgb(' + a + ',' + b + ',' + c + ')';
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
                                       body.bgColor = getRandomColor();
                                    //    output.setAttribute = getRandomColor();
                 },(seconds - i)*1000); 
            }else{
            setTimeout(function(){ output.innerHTML = "" + i +" ";},(seconds - i)*1000);
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

