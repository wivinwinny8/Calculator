let result="";
let final;
const ip=document.getElementById("text");


function zero(){
    result+="0";
    ip.textContent=result;
}
function one(){
    result+="1";
    ip.textContent=result;
}
function two(){
    result+="2";
    ip.textContent=result;
}
function three(){
    result+="3";
    ip.textContent=result;
}
function four(){
    result+="4";
    ip.textContent=result;
}
function five(){
    result+="5";
    ip.textContent=result;
}
function six(){
    result+="6";
    ip.textContent=result;
}
function seven(){
    result+="7";
    ip.textContent=result;
}
function eight(){
    result+="8";
    ip.textContent=result;
}
function nine(){
    result+="9";
    ip.textContent=result;
}

function plus(){
    result+="+";
    ip.textContent=result;
}
function minus(){
    result+="-";
    ip.textContent=result;
}
function star(){
    result+="*";
    ip.textContent=result;
}
function slash(){
    result+="/";
    ip.textContent=result;
}
function dot(){
    result+=".";
    ip.textContent=result;
}

function ac(){
    result="";
    ip.textContent="0";
}

function equal(){
    try{
        final=eval(result);
    }
    catch(err){
        final="error"
    }
    
    if(final=="error"||final=="Infinity"){
        result=""
        ip.textContent="Error"
    }
    else{
        result=final;
        ip.textContent=final;
    }
}