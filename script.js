const inputField=document.getElementById('inputField');
const  addtodobutton= document.getElementById('addtodo');
const todocon = document.getElementById('todocon');


addtodobutton.addEventListener('click',function (){

var problema = document.createElement("div");/*
var newli= document.createElement('li');
var checkbtn= document.createElement('button');
var delbtn= document.createElement('button');


notcompleted.appendChild(newli);
newli.appendChild(checkbtn);
newli.appendChild(delbtn);*/

problema.innerText = inputField.value;
todocon.appendChild(problema);
inputField.value='';
problema.addEventListener('click',function(){
    problema.style.textDecoration="underline";
})
problema.addEventListener('dblclick',function(){
    todocon.removeChild(problema);
})

});
