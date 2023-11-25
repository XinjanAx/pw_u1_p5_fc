const sumar = (ni,n2) => n1+n2;

const sumarCompletoLambda = () => {
    var ret =parser('num_a')+parser('num_b');
    document.getElementById('jsRet+').innerText=ret;
}
const restarCompletoLambda = () => {
    var ret =parser('num_a')-parser('num_b');
    document.getElementById('jsRet-').innerText=ret;
}
const multiplicarCompletoLambda = () => {
    var ret =parser('num_a')*parser('num_b');
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
    const diasSemana=["lunes","martes","miercoles","jueves","viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5]="sabado";
    console.log(diasSemana[5])
    diasSemana.push("domingo");
    console.log(diasSemana)
    diasSemana.unshift("ayer")

    const numeros1 = [1,2,3,4,5]
    const numeros2 = [6,7,8]
    console.log(numeros1)
    console.log(numeros2)
    console.log(numeros1.concat(numeros2))

    for(const dia of diasSemana){
        console.log(dia)
        if(dia=='martes'){
            console.log("2x1")
        }
    }
    
    //declaracion de objetos
    const estudiante = {
        //Json
        nombre: "Alexander",
        apellido: "Condor",
        edad: "26",
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante)
    console.log('genero: '+estudiante.genero)
    estudiante.genero="NaN"
    console.log('genero: '+estudiante.genero)

    const persona = {
        //Json
        nombre: "Alexander",
        apellido: "Condor",
        edad: "26",
        direccion:{
            barrio:"San pedro",
            calle_P:"mariana de jesus",
            calle_S:"agustin miranda",
            num:"lt45",
        }
        
    }
    console.log(persona);

    //arreglo de 4 paciente con 3 atributos
    const pacientes=[
        paciente1= {
            nombre:"Vladimir Guerrero",
            edad:"47",
            enfermedad:"Diabetes"
        },
        paciente2= {
            nombre:"Sheila Urith",
            edad:"24",
            enfermedad:"Fractura"
        },
        paciente3={
            nombre:"Gabbie Castro",
            edad:"32",
            enfermedad:"Sifilis"
        },
        paciente4= {
            nombre:"Jordy Elnino Poler",
            edad:"25",
            enfermedad:"Elefantitis"
        }
    ]
    console.log(pacientes)
    console.table(pacientes)
    console.log("Nombre: "+pacientes[0].nombre)
    
    //Desestructuración de arreglos 
    const diasSemana2=["lunes ","martes ","miercoles ","jueves ","viernes "];
    const [dia1,dia2,dia3,dia4] = diasSemana2;
    console.log(dia1,dia4)
    console.log("-----------")

    const [d1,d2,d3,d4,d5,d6,d7] = ["lunes ","martes ","miercoles ","jueves ","viernes "];
    console.log(d1,d2,d7)

    //Desestructuración de objetos
    console.log("Desestructuración de objetos");
    const vehiculo ={
        marca:"Mazda",
        modelo:'mazda3',
        anio:"2027"
    } 
    const {marca,modelo,anio}=vehiculo
    console.table(vehiculo)
    console.log("Modelo ",modelo)

    console.log("Ejemplo");
    const {materia:{nombre,creditos},estudiantes,aula} = {materia:{nombre:"programacion",creditos:15},estudiantes:23,aula:'R5'}
    console.log(nombre,creditos,estudiantes,aula);


}