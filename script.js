
const input = document.getElementById('input');

function todisplay(inp){
    input.value += inp;
}

function toclear(){
    input.value = "";
}

function cal(optr){
    input.value += optr;
}

function calculate(){
    try{
     input.value = eval(input.value)   
    }
    catch(error){
        input.value = "Error";
    }
}