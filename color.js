window.addEventListener("load",function(){

let color=["green","blue","red","orange","violet"];
let canvas=document.getElementById("canvas");
let button=document.getElementById("btn");

button.addEventListener("click",as);

function as(){
    let index=parseInt((Math.random()*color.length));
    canvas.style.backgroundColor=color[index];
}
}); 