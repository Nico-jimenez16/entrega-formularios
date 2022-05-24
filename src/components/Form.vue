<template>
    <div class="w-full flex flex-col justify-center items-center">
        <H1 class="text-3xl mb-2">VALIDACION DE FORMULARIO</H1>
        <form class="w-2/3 text-black bg-lime-600 p-4 mb-8" action="">
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="nombre">Nombre</label>
                </div>
                <input class="w-full p-2 pl-2" type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre Completo" v-model.trim="formulario.nombre.value">
                <div class="bg-red-700 mt-2 w-1/3" v-if="!formulario.nombre.isValido">
                    <p class="text-white font-bold">{{ formulario.nombre.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="email">E-mail</label>
                </div>
                <input class="w-full p-2 pl-2" type="email" name="email" id="email" placeholder="Ingrese E-mail" v-model.trim="formulario.email.value">
                <div class="bg-black mt-2 w-1/3" v-if="!formulario.email.isValido">
                    <p class="text-red-500 font-bold">{{ formulario.email.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="dni">Dni</label>
                </div>
                <input class="w-full p-2 pl-2" type="number" name="dni" id="dni" placeholder="Ingrese Dni" v-model.number="formulario.dni.value">
                <div class="bg-black mt-2 w-1/3" v-if="!formulario.dni.isValido">
                    <p class="text-red-500 font-bold">{{ formulario.dni.mje }}</p>
                </div>
            </div>
            <div class="flex flex-col h-24">
                <div class="w-full">
                    <label for="hijos">Curso</label>
                </div>
                <select class="w-full p-2" v-model="formulario.curso.value">
                    <option disabled value="cursos">Seleccione un curso</option>
                    <option>VueJs</option>
                    <option>Angular</option>
                    <option>React</option>
                    <option>NextJs</option>
                </select>
                <div class="bg-black mt-2 w-1/3" v-if="!formulario.curso.isValido">
                    <p class="text-red-500 font-bold">{{ formulario.curso.mje }}</p>
                </div>
            </div>
            <p class="text-red-600 mb-2 bg-black p-2" v-if="!formulario.exito">Debe completar todos los campos del formulario</p>
            <button type="submit" class="w-1/3 border p-2 text-xl text-white rounded-md" @keyup.enter.prevent="EnviarFormulario()" @click.prevent="EnviarFormulario()">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            tabla:[],
            formulario: {
                exito: true,
                nombre: {
                    value: '',
                    isValido: true,
                    mje: 'Nombre no exitoso'
                },
                email: {
                    value: '',
                    isValido: true,
                    mje: 'E-mail no Valido'
                },
                dni: {
                    value: '',
                    isValido: true,
                    mje: 'Dni no Valido'
                },
                curso: {
                    value: '',
                    isValido: true,
                    mje: 'Curso no Valido'
                }
            }
        }
    },
    methods:{
        EnviarFormulario(){
            if( this.formulario.nombre.value && this.formulario.email.value && this.formulario.dni.value && this.formulario.curso.value != ''){
                if(this.validarEmail){
                    this.formulario.exito = true
                    this.tabla.push({
                        nombre: this.formulario.nombre.value,
                        email: this.formulario.email.value,
                        dni: this.formulario.dni.value,
                        curso: this.formulario.curso.value
                    })
                    this.$emit("agregar-a-tabla" , this.tabla)
                    this.formulario.nombre.value = ''
                    this.formulario.email.value = ''
                    this.formulario.curso.value = ''
                    this.formulario.dni.value = ''
                } 
                else {
                    this.formulario.email.isValido = false
                    this.formulario.exito = true
                }
            }
            else this.formulario.exito = false
        },

    },
    computed:{
        validarEmail() {
            if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(this.formulario.email.value)){
                return true
            } else {
                this.formulario.email.isValido == false
                return false
            }
        },
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