<template>
    <div v-if="student" class="studentDetailsSection">
        <h2>Student Details here for {{ id }}</h2>

        <h4>{{student.first_name }} {{student.last_name}}</h4>
        <h4>{{student.email }}</h4>
        <h4>{{student.phone }}</h4>
        <h4>{{student.notes }}</h4>
        <h4>{{student.strengths.communication }}</h4>
        <h4>{{student.strengths.writing }}</h4>
        <h4>{{student.strengths.programming }}</h4>
        <h4>Group: {{student.group }}</h4>




        <button @click="goBack">Back</button>
    </div>

</template>

<script>
export default {
    props: ['id'],
    data() {
        return{
            student: null,
        }
    },
    methods: {
        goBack(){
            console.log("back btn pressed.")
            this.$emit('goGroups');
        }
    },
    mounted() {
        fetch("http://localhost:3000/students/"+this.id)
                .then(response => response.json())
                .then(data => {
                    this.student = data;
                })
                .catch(error => {
                    console.log(error.message);
                });
    }
}
</script>

<style>

</style>