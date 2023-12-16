console.log('elementos vue');
console.log(Vue);
const estudiantes=[
    {nombre:'a',edad:18},
    {nombre:'b',edad:24},
    {nombre:'c',edad:30},
    {nombre:'d',edad:32},
    {nombre:'',edad:20},
]
console.log(estudiantes);
console.table(estudiantes);

const app=Vue.createApp({
    /*
    template:`
    <h1>Hola mundo</h1>
    <p>Desde App.js</p>
    <h6>{{3-2}}</h6>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{true?'verdad':'falso'}}</p>`,

    */
    //-----------Options API-----------
    data(){
        return{
            mensaje:'hola mundo desde Vue.js',
            valor:100,
            lista:estudiantes,
            nombre:undefined,
            edad:null,
        }
    },
    methods:{
        cambiarMensaje(){
            console.log('entro a cambiar mensaje');

            this.mensaje="HOLA DESDE EL BOTON"
        },
        sumar(){
            this.valor++
        },
        agregar(){
            this.lista.push({nombre:this.nombre, edad:this.edad})
            if(this.nombre===undefined||this.edad!==null){
                
            }
        },
        pesionandotecla(event){
            console.log('click');
            console.log(event.charCode);
            if(event.charCode===13){
                this.agregar();
            }
        },
        pesionandoteclaMod(){
            console.log('click---------2');
            console.log(this.nombre);
            this.agregar();
        },
        borrar(){
            console.log('borrando...');
            this.esta=false;
        }
    },
    watch:{}
});
app.mount('#myApp')