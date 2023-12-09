console.log('elementos vue');
console.log(Vue);

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
    methods:{
        cambiarMensaje(){
            console.log('entro a cambiar mensaje');

            this.mensaje="HOLA DESDE EL BOTON"
        },
        sumar(){
            this.valor++
        }
    },
    watch:{

    },
    data(){
        return{
            mensaje:'hola mundo desde Vue.js',
            valor:100
        }
    }
});
app.mount('#myApp')