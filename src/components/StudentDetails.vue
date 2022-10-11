<template>
    <div v-if="student" class="studentDetailsSection">
        <h2>Student Details for {{ id }}</h2>

        <div class="studentDetailsCard">
            <div class="name">
                <p>{{student.first_name }} {{student.last_name}}</p>
            </div>
            
            <div class="contactInfo">
                <p>{{student.email }} | {{student.phone }}</p>
            </div>
            
            <div class="notesSection">
                <div class="notesHeader">
                    <p>Included Notes:</p>
                </div>

                <div class="notes">
                    <p>{{student.notes }}</p>
                </div>
            </div>

            <div class="chartLegend">
                <p>
                    <span>Communication: {{student.strengths.communication }}</span>
                    <span>Writing: {{student.strengths.writing }}</span>
                    <span>Programming: {{student.strengths.programming }}</span>
                </p>
            </div>

            <div id="chartArea">
                <RadarChart 
                    :gotLabels="['Communication', 'Writing', 'Programming']" 
                    :gotData="[student.strengths.communication, student.strengths.writing, student.strengths.programming]"
                    />
            </div>
            
            <div class="groupInfo">
                <p>Assigned to Group: {{student.group }}</p>
            </div>
            
        </div>

    </div>

    <button class="buttonBack" @click="goBack">Back</button>

</template>

<script>
import RadarChart from "../components/radarChart.ts"

export default {
    components: {
        RadarChart
    },
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
.studentDetailsCard {
    max-width: 400px;
    margin: 0 auto;

    /* border: 1px dotted grey; */
    padding: 20px;
    border-radius: 5px;

    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}

.name {
    font-weight: bold;
    font-size: 1.3em;
}
.notesSection {
    padding: 5px 20px 5px 20px;
}
.notesHeader{
    text-align: left;
    font-weight: 600;
}
.notes{
    text-align: justify;
}

.chartArea {
    width: 100%;
    height: 400px;
    margin-bottom: none;
    margin: auto;
}
.chartLegend {
    font-size: 13px;
}
.chartLegend p span {
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
}
.groupInfo {
    font-weight: 400;
}
.buttonBack {
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background: #eded;
    border: none;
    cursor: pointer;
}
.buttonBack:hover {
    background: rgba(143, 140, 140, 0.867);
}
</style>