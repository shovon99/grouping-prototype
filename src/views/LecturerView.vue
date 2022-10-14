<template>
  <div class="navCustom">
        <div class="appName">
            <p>Grouping</p>
        </div>
        <div class="loggedIn">
            <p>Logged in as: Lecturer </p>
            <button @click="goHome">Log Out</button> 
        </div>
    </div>
    <div class="LecturerSettings">
        <div class="startDate">
            <label>Group formation Start data: </label>
            <input type="date">
        </div>
        <div class="finishDate">
            <label>Group formation deadline: </label>
            <input type="date">
        </div>
        <div class="numberOfGroups">
            <label>Total no. of groups: </label>
            <input type="number">
        </div>
        <div class="numberOfStudentsInGroup">
            <label>Total no. of students in each Group: </label>
            <input type="number">
        </div>

        <button class="button-1">Save Settings</button>
    </div>

</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push( {name: 'login'} )
        }
    }
}
</script>

<style>
.LecturerSettings {
    /* border: 1px dotted; */
    width: 60%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 20px;
    border-radius: 10px;
}
.startDate, .finishDate, .numberOfGroups, .numberOfStudentsInGroup{
    /* border: 1px dotted; */
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
}
.LecturerSettings input {
    text-align: center;
    padding: 12px 20px;
    box-sizing: border-box;
}
.LecturerSettings label {
    margin: none;
    color: black;
}

/* CSS */
.button-1 {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 20px;
}

.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}
</style>