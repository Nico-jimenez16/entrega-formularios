<template>
    <div>
        <H1 class="text-3xl mt-4 mb-4 font-bold">Tabla</H1>
        <div class="w-full mt-8 mb-8">
            <div>
                <table class="w-full table-auto text-xl">
                    <thead class="h-full bg-black text-white p-8">
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Dni</th>
                            <th>Curso</th>
                        </tr>
                    </thead>

                    <!-- Formulario en Tabla -->

                    <tbody class="flex-inline text-xl">
                        <tr v-for="(user, i) of getTabla" :key="i">
                            <td>{{ user.nombre }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.dni }}</td>
                            <td>{{ user.curso }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    name: 'Tabla',
    computed:{
        ...mapGetters(['getTabla'])
    }
}
</script>

<style scoped>
tr{
    display: flex;
    height: 100%;
}

th, td{
    border: 1px solid;
    width: 100%;
    padding: 10px;
}
td {
    text-align: center;
}
</style>