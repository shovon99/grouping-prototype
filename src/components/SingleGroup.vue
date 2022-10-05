<template>
    <div class="groupOutline">
        <h4>Group {{group}}</h4>
        
        <div class="card">
            
            <div class="studentListInstances" v-for="student in students" :key="student.id">
                <h5>{{student.id }} - {{student.first_name}} {{student.last_name}}</h5>
            </div>
        </div>
        
        <div class="buttons">
            <button>Join</button>
            <button>Leave</button>
            <button>Details</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleGroup",
    props: ['group'],

    data() {
        return {
            students: null,
        }
    },
    mounted() {
        fetch("http://localhost:3000/students?group=" + this.group)
                .then(response => response.json())
                .then(data => {
                    this.students = data;
                })
                .catch(error => {
                    console.log(error.message);
                });
    }
}
</script>

<style >
.actions{
    padding: 10px;
}
.groupOutline{
    border: 1px solid rgb(212, 211, 211);
    border-radius: 5px;
    padding: 5px;
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);  */
  /* this adds the "card" effect */
  padding: 16px;
  text-align: left;
  /* background-color: #f1f1f1; */
}
.card h5 {
    padding: 5px;
}

.buttons button {
    margin: 5px;
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 4px;
    color: #24292e;
    background-color: #fafbfc;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;                
}
.buttons button:hover {
    background-color: #f3f4f6;
    border-color: #1b1f2326;
    transition-duration: 0.1s;
}

</style>