// generate a random color
const randomcolor = function(){
    const hex = "123456789ABCDEF";
    let color = '#';
    for(let i =0 ; i<6 ; i++){
        color +=  hex[Math.floor(Math.random()*16)];
    }
    return color;
};
console.log(randomcolor());
let intervelid

const startChangingColor = function(){
   intervelid =  setInterval(changecolor , 1000);

    function changecolor(){
        document.querySelector("body").style.backgroundColor = randomcolor();

    }
   

}
function stopchanging(){
    clearInterval(intervelid);
}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopchanging);





