<template>

    <h3 id="studentListTitle">All Students</h3>
    <div class="studentList" v-for="student in students" :key="student.id">
        <h4 @click="goToStudentDetailsPage(student.id)">{{student.id }} - {{student.first_name}} {{student.last_name}}</h4>
    </div>
    
</template>

<script>
export default {
    name: "StudentList",
    data() {
        return {
            students: null,
        }
    },
    mounted() {
        fetch("http://localhost:3000/students/")
                .then(response => response.json())
                .then(data => {
                    this.students = data;
                })
                .catch(error => {
                    console.log(error.message);
                });
    },
    methods: {
        goToStudentDetailsPage(IdFromClick){
            this.$emit('clickedStudentDetails', IdFromClick);
        }
    }

}
</script>

<style>
.studentList h4{
    text-align: left;
    background: #f4f4f4;
    padding: 5px;
    margin: 10px auto;
    border-radius: 5px;
    cursor: pointer;
}
.studentList h4:hover {
    background: #ddd;
}
#studentListTitle {
    padding: 10px;
}
</style>