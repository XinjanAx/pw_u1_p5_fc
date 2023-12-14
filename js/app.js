console.log('elementos vue');
console.log(Vue);
const estudiantes=[
    {nombre:'a',edad:18},
    {nombre:'b',edad:24},
    {nombre:'c',edad:30},
    {nombre:'d',edad:32},
    {nombre:'e',edad:20},
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
            nombre:null,
            edad:null
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
        },
        pesionandotecla(event){
            console.log('click');
            console.log(event.charCode);
            if(event.charCode===13){
                this.agregar();
            }
        }
    },
    watch:{}
});
app.mount('#myApp')