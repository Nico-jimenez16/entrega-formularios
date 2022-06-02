<template>
    <div class="w-full flex flex-col justify-center items-center">
        <H1 class="text-3xl mt-4 mb-4 font-bold">FORMULARIO</H1>
        <form class="w-2/3 text-black bg-lime-600 p-4 mb-8" action="">
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="nombre">Nombre</label>
                </div>
                <input class="w-full p-2 pl-2" type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre Completo" @keyup="validarNombre" v-model.trim="formulario.nombre.value">
                <div class="bg-red-700 mt-2 w-1/3" v-if="!formulario.nombre.isValido">
                    <p class="text-white font-bold">{{ formulario.nombre.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="email">E-mail</label>
                </div>
                <input class="w-full p-2 pl-2" type="email" name="email" id="email" placeholder="Ingrese E-mail" @keyup="validarEmail" v-model.trim="formulario.email.value">
                <div class="bg-red-700 mt-2 w-1/3" v-if="!formulario.email.isValido">
                    <p class="text-white font-bold">{{ formulario.email.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="dni">Dni</label>
                </div>
                <input class="w-full p-2 pl-2" type="number" name="dni" id="dni" placeholder="Ingrese Dni" @keyup="validarDni" v-model.number="formulario.dni.value">
                <div class="bg-red-700 mt-2 w-1/3" v-if="!formulario.dni.isValido">
                    <p class="text-white font-bold">{{ formulario.dni.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="hijos">Curso</label>
                </div>
                <select class="w-full p-2" v-model="formulario.curso.value">
                    <option disabled value="cursos">Seleccione un curso</option>
                    <option>VueJs</option>
                    <option>AngularJs</option>
                    <option>React</option>
                    <option>Next Js</option>
                </select>
                <div class="bg-black mt-2 w-1/3" v-if="!formulario.curso.isValido">
                    <p class="text-red-500 font-bold">{{ formulario.curso.mje }}</p>
                </div>
            </div>
            <p class="text-red-600 mb-2 bg-black p-2" v-if="!formulario.exito">Debe completar todos los campos del formulario</p>
            <button type="submit" class="w-1/3 border p-2 text-xl text-white rounded-md" @click.prevent="EnviarFormulario()">Enviar</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Form',
    data() {
        return {
            formulario: {
                exito: true,
                nombre: {
                    value: '',
                    isValido: false,
                    mje: ''
                },
                email: {
                    value: '',
                    isValido: false,
                    mje: ''
                },
                dni: {
                    value: '',
                    isValido: true,
                    mje: ''
                },
                curso: {
                    value: '',
                    isValido: true,
                    mje: ''
                }
            }
        }
    },
    methods:{

        ...mapMutations(['agregarTabla']),

        EnviarFormulario(){
            if( this.formulario.nombre.value && this.formulario.email.value && this.formulario.dni.value && this.formulario.curso.value != ''){
                if(this.formulario.nombre.isValido && this.formulario.email.isValido){
                    this.formulario.exito = true
                    let objeto = {
                        nombre: this.formulario.nombre.value,
                        email: this.formulario.email.value,
                        dni: this.formulario.dni.value,
                        curso: this.formulario.curso.value
                    }
                    this.agregarTabla(objeto)
                    alert('Datos agregados Correctamente')
                    this.formulario.nombre.value = ''
                    this.formulario.email.value = ''
                    this.formulario.curso.value = ''
                    this.formulario.dni.value = ''
                }
            }
            else this.formulario.exito = false
        },
        validarEmail() {
            if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(this.formulario.email.value)){
                this.formulario.email.isValido = true
                this.formulario.email.mje = 'mail Valido'
                return true
            } else {
                this.formulario.email.isValido = false
                this.formulario.email.mje = 'mail invalido'
                return false
            }
        },
        validarNombre(){
            if(this.formulario.nombre.value == '' || /\d/.test(this.formulario.nombre.value)){
                this.formulario.nombre.isValido = false
                this.formulario.nombre.mje = 'nombre invalido'
            }else{
                this.formulario.nombre.isValido = true
                this.formulario.nombre.mje = 'nombre valido'
            }
        },
        validarDni(){
            const regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
           if(regular_dni.test(this.formulario.dni.value) && this.formulario.dni.value >= 0){
               this.formulario.dni.isValido = true
               this.formulario.dni.mje = 'Dni valido'
           }else{
               this.formulario.dni.isValido = false
               this.formulario.dni.mje = 'Dni valido'
           }
        },

    },
    computed:{
        
    },
    watch:{
    
    }
}
</script>

<style>
label{
    color: white;
}
p{
    color: white;
}
</style>