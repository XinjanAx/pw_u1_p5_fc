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
    if(!a==''&&!b==''){
        switch(oper){
            case '+':
                ret = parseFloat(a) + parseFloat(b);
            break;
            case '-':
                ret = parseFloat(a)-parseFloat(b);
            break;
            case 'x':
                ret = parseFloat(a)*parseFloat(b);
            break;
            case '/':
                ret = parseFloat(a)/parseFloat(b);
            break;
        }
        document.getElementById('pantalla').innerText=ret;
    }else{
        document.getElementById('pantalla').innerText="numero?";
    }
}
function borrar(){
    if(!b==''){
        b=b.slice(0,-1);
    }else if(!oper==''){
        oper='';
        siguiente = false;
    }else if(!a==''){
        a=a.slice(0,-1);
    }
    document.getElementById('a').innerText=a;
    document.getElementById('op').innerText=oper;
    document.getElementById("b").innerText=b;
    ret='';
    document.getElementById('pantalla').innerText=ret;
}
function resetear(){
    document.getElementById('pantalla').innerText="";
    document.getElementById('a').innerText="Hola =)";
    document.getElementById('b').innerText="";
    document.getElementById('op').innerText="";
    a='';
    b='';
    oper='';
    ret='';
    siguiente = false;
}