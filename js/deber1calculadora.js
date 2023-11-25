var a='';
var b='';
var ret;
var oper;
var siguiente = false;
function concatenar(num){
    if(!siguiente){
        a = a+num;  
    }else{
        b = b+num; 
    }
    document.getElementById('a').innerText=a;
    document.getElementById("b").innerText=b;
}
function operacion(op){
    siguiente = true;
    oper=op;
    document.getElementById('op').innerText=op;
}
function calcular(){
    switch(oper){
        case '+':
            ret = parseFloat(a) + parseFloat(b);
        break;
        case '-':
            ret = parseFloat(a)-parseFloat(b);
        break;
        case '*':
            ret = parseFloat(a)*parseFloat(b);
        break;
        case '/':
            ret = parseFloat(a)/parseFloat(b);
        break;
    }
    document.getElementById('pantalla').innerText=" = "+ret;
}

function resetear(){
    document.getElementById('pantalla').innerText="";
    document.getElementById('a').innerText="";
    document.getElementById('b').innerText="";
    document.getElementById('op').innerText="";
    a='';
    b='';
    oper='';
    ret='numeros?';
    siguiente = false;
}