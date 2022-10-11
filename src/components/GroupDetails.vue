<template>
  <div class="outerBody">
    <h3>Group Details for {{ Id }}</h3>
    <div class="groupStudentDetails">

    </div>
    <div class="groupGraph">

    </div>
  </div>
  <button class="buttonBack" @click="goBack">Back</button>
</template>

<script>
export default {
    props: ['Id'],
    methods: {
        goBack(){
            console.log("back btn pressed.")
            this.$emit('goGroups');
        }
    }
}
</script>

<style>

</style>