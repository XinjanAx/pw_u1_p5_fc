const sumar = (ni,n2) => n1+n2;

const sumarCompletoLambda = () => {
    var ret =parser('num_a')+parser('num_b');;
    document.getElementById('jsRet+').innerText=ret;
}
const restarCompletoLambda = () => {
    var ret =parser('num_a')-parser('num_b');;
    document.getElementById('jsRet-').innerText=ret;
}
const multiplicarCompletoLambda = () => {
    var ret =parser('num_a')*parser('num_b');;
    document.getElementById('jsRet*').innerText=ret;
}
const dividirCompletoLambda = () => {
    var ret =parser('num_a')/parser('num_b');
    document.getElementById('jsRet/').innerText=ret;
}
const cambiarImg1 = () => {
    document.getElementById('img_swap').src='../img/milos.png';
}
const cambiarImg2 = () => {
    document.getElementById('img_swap').src='../img/img1.jpg';

}

const parser=(id) => parseInt(document.getElementById(id).value)

function conceptosJS(){
    let var1 = 10;
    let var1Txt = 'texto Let';
    console.log(var1 +' '+ var1Txt);

    var var2 = 10;
    var var2Txt = "texto Var"
    console.log(var2 +' '+ var2Txt);

    const const1 = 10;
    const constTxt = "texto Const";
    console.log(const1 +' '+ constTxt);

    document.getElementById('conceptosJS').innerHTML='<label>Abre la consola pls...</label>';

    //declaracion de arreglos
    const diasSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
    console.log(diasSemana);

}