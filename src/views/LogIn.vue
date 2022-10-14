<template>
    <h1 class="logInH1">Please Log in to continue.</h1>

    <form @submit.prevent = "handleSignIn">
        <label>Log in As: </label>
        <select v-model="logInAs">
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
        </select>

        <label>ID: </label>
        <input type="number" required v-model="id">

        <label>Password: </label>
        <input type="password" required v-model="password">

        <button class="signInButton">Sign In</button>

    </form>
    
    <div v-if="errorMessage">
        <p>Id/Password didn't match. Try Again.</p>
    </div>

</template>

<script>

export default {
    data() {
        return {
            //Form Data
            logInAs: 'student',
            id: '',
            password: '',

            //Student Object 
            student: null,

            //For showing error message
            errorMessage: false,

        }
    },
    methods: {
        handleSignIn() {
            console.log(this.logInAs)
            console.log(this.id)
            console.log(this.password)

            if(this.logInAs === 'lecturer'){
                this.$router.push({ name: 'lecturerView' })
            }
            else if (this.logInAs === 'student'){
                fetch("http://localhost:3000/students/"+this.id)
                .then(response => response.json())
                .then(data => {
                    this.student = data;
                    console.log(this.student);

                    if(this.password === this.student.password)
                    {
                        console.log("Password Match!.")
                        this.errorMessage = false;
                        this.$router.push({ name: 'studentView', params: { id: this.student.id } })
                    }
                    else
                    {
                        this.errorMessage = true;
                    }
                    
                })
                .catch(error => {
                    console.log(error.message);
                });
            }
            
        }
    }
}
</script>

<style>
.logInH1 {
    margin-top: 50px;
}
form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(246, 245, 245);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: rgb(114, 111, 111);
    display: inline-block;
    margin:  25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}
.signInButton {
    display: block;
    margin: 20px auto;
    padding: 10px 20px 10px 20px;
    background: rgba(67, 117, 225, 0.3);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
.signInButton:hover {
    background: rgb(93, 93, 234);
    color: white;
}
</style>