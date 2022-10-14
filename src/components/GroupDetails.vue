<template>
  <div class="outerBody">
    <h3>Group Details for {{ Id }}</h3>

    <div class="groupBody" v-if="students">

      <div class="groupStudentDetails">
          <div class="eachStudent" v-for="student in students" :key="student.id">
              <div class="studentIdentity">
                  <h4>{{ student.first_name }} {{ student.last_name }}</h4>
                  <p>{{ student.id }}</p>
              </div>
              <div class="studentGraph">
                <!-- <RadarChart 
                    :gotLabels="['Communication', 'Writing', 'Programming']" 
                    :gotData="[student.strengths.communication, student.strengths.writing, student.strengths.programming]"
                    /> -->
                  <BarChart
                    :width = 200
                    :height = 200
                    :labels="['Communication', 'Writing', 'Programming']" 
                    :datas="[student.strengths.communication, student.strengths.writing, student.strengths.programming]"
                  />
              </div>
          </div>
      </div>

      <div class="groupGraph">
          <RadarChart 
                    :width = 500
                    :height = 500
                    :gotLabels="['Communication', 'Writing', 'Programming']" 
                    :gotData="[groupStrengths.avgComm, groupStrengths.avgWriting, groupStrengths.avgProg]"
                    />
      </div>

    </div>
    
  </div>
  <button class="buttonBack" @click="goBack">Back</button>
</template>


<script>
import BarChart from "../components/barChart.ts"
import RadarChart from "../components/radarChart.ts"

export default {
    components: {
      RadarChart,
      BarChart
    },
    props: ['Id'],
    methods: {
      goBack(){
        console.log("back btn pressed.")
        this.$emit('goGroups');
      }
    },
    data() {
      return {
        students: null
      }
    },
    computed: {
      groupStrengths() {
        if(!this.students) return null;

        var totalCommunication = 0
        var totalProgramming = 0
        var totalWriting = 0

        for (var key of Object.keys(this.students)) {
          totalCommunication += this.students[key]["strengths"]["communication"]
          totalProgramming += this.students[key]["strengths"]["programming"]
          totalWriting += this.students[key]["strengths"]["writing"]
        }

        var numberOfStudents = Object.keys(this.students).length;

        var averageCommunication = Math.ceil(totalCommunication / numberOfStudents)
        var averageProgramming = Math.ceil(totalProgramming / numberOfStudents)
        var averageWriting = Math.ceil(totalWriting / numberOfStudents)
        return {
          "avgComm" : averageCommunication,
          "avgProg" : averageProgramming,
          "avgWriting" : averageWriting
        }
      }
    },
    mounted() {
      fetch("http://localhost:3000/students?group=" + this.Id)
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

<style>
.groupBody {
  width: 70%;
  align-content: center;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 20px;
}
.groupStudentDetails{
  display: inline-block;

  vertical-align: middle;
}
.groupGraph{
  display: inline-block;
  margin: auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
  vertical-align: middle;
}
.eachStudent {
  display: flex;
  /* border: 1px dotted grey; */
  max-width: 450px;
  margin-top: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
}
.studentIdentity {
  flex: 1;
  /* border: 1px dotted grey; */
  padding: 10px;
  margin: auto;
  max-width: 400px;
}
.studentGraph {
  padding: 10px;
  /* border: 1px dotted grey; */
}
</style>