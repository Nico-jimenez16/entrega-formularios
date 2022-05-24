<template>
    <div>
        <div class="w-full mt-8 mb-8">
            <div>
                <table class="w-full table-auto text-xl">
                    <thead class="h-full bg-black text-white p-8">
                        <tr>
                            <th v-for="(head, i) of user.headtable" :key="i" scope="col">{{head}}</th>
                        </tr>
                    </thead>

                    <!-- Formulario en Tabla -->

                    <tbody class="flex-inline text-xl">
                        <tr v-for="(form, index) of user.forms" :key="index">
                            <td>{{ form[index].nombre }}</td>
                            <td>{{ form[index].email }}</td>
                            <td>{{ form[index].dni }}</td>
                            <td>{{ form[index].curso }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabla',
    props: {
        user:{
            type: Object,
            required: true
        }
    },
    methods: {
      
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