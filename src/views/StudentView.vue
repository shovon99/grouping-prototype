<template>
  <div class="allbody">
        <div class="navCustom">
                <div class="appName">
                    <p>Grouping</p>
                </div>
                <div class="loggedIn">
                    <p>Logged in as: {{ id }}</p>
                    <button @click="goHome">Log Out</button> 
                </div>
        </div>

        <div v-if="showGroups" class="studentViewBody">

            <div class="row">
                <div class="column1">
                    <div class="groupView">
                        <SingleGroup :group="1"/>
                    </div>
                    <div class="groupView">
                        <SingleGroup :group="2"/>
                    </div>
                    <div class="groupView">
                        <SingleGroup :group="3"/>
                    </div>
                    <div class="groupView">
                        <SingleGroup :group="4"/>
                    </div>
                </div>
                <div class="column2">
                    <div class="allStudentList">
                        <StudentList @clickedStudentDetails="handleClickedStudentDetails"/>
                    </div>
                </div>
            </div>

        </div>
        <div v-if="showStudentDetails" class="studentDetailSection" >
            <StudentDetails :id="detailStudentID" @goGroups="goGroupsView"/>
        </div>
  </div>
  
  
</template>

<script>
import StudentList from "../components/StudentList.vue"
import SingleGroup from "../components/SingleGroup.vue";

import StudentDetails from "../components/StudentDetails.vue"

export default {
    components: {
        StudentList,
        SingleGroup,
        StudentDetails
    },
    props: ['id'],
    methods: {
        goHome() {
            this.$router.push( {name: 'login'} )
        },
        goGroupsView() {
            
            this.showStudentDetails = false;
            this.showGroupDetails = false;
            this.showStudentProfile = false;

            this.showGroups = true;
        },
        handleClickedStudentDetails(studentID){
            console.log(studentID);
            this.detailStudentID = studentID;

            this.showGroups = false;
            this.showStudentDetails = true;
            this.showGroupDetails = false;
            this.showStudentProfile = false;
        }
    },
    data() {
        return {
            showGroups: true,
            showStudentDetails: false,
            showGroupDetails: false,
            showStudentProfile: false,

            detailStudentID: null,
        }
    }
}
</script>

<style>
.appName {
    display: inline-block;
}
.appName p {
    font-weight: bold;
}
.loggedIn {
    display: inline-block;
    vertical-align: auto;
}
.loggedIn p {
    display: inline-block;
}
.loggedIn button {
    margin-left: 20px;
    background: crimson;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
}
.loggedIn button:hover {
    background: rgb(231, 71, 65);
}
.navCustom {
    display: flex;
    justify-content: space-between;
    height: auto;
    background: #ddd;
    padding: 10px;
    border-radius: 5px;
}
.studentViewBody {
    display: flex;
    max-width: 100%;
    justify-content: center;
}
.allStudentList {
    display: inline-block;
    padding: 20px;
    margin-top: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid rgb(212, 211, 211);
    border-radius: 5px;
}
.groupView {
    display: inline-block;
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    /* padding: 20px; */
    align-items: stretch;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
/* .groupView:hover {
    cursor: pointer;
    background: rgb(235, 234, 234);
} */


/* For Row Col Management*/
/* Float four columns side by side */
.column1 {
  float: left;
  width: 60%;
}
.column2 {
  float: left;
  width: 40%;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.studentDetailSection {
    width: 100%;
    margin: 0 auto;
}

</style>