<script>

import axios from "axios";

export default {

    props: {
        category: {
            type: String,
            default: '',
        },
        difficulty: {
            type: String,
            default: '',
        },
    },

//art = 25

    data: () => ({
        result: null,
        list:
        ['correct_answer','incorrect_answer','incorrect_answer1','incorrect_answer2'],
        randomAnswer:''
    }),
    async created() {
        await axios.get("https://opentdb.com/api.php?amount=1&type=multiple").then((result) => {
            this.all = result.data;
            this.result = result.data.results[0].question;
            this.correct_answer = result.data.results[0].correct_answer;
            this.incorrect_answer = result.data.results[0].incorrect_answers[0];
            this.incorrect_answer1 = result.data.results[0].incorrect_answers[1];
            this.incorrect_answer2 = result.data.results[0].incorrect_answers[2];
            
            console.log(result.data.results[0].question);
            console.log(result.data);
        })
    },
    
    //order random answers everytime 
    methods: {
        picker: function(){
            let randomAnswer = Math.floor (Math.random() * this.list.lenght);
    
    this.randomAnswer = this.list[randomAnswer];
    return console.log(this.randomAnswer);
        }
    },

    beforeCreated(){
        this.picker();
    }
};

</script>

<template>

        <img  class="responseIcon" src="@/icons/question.png" alt="">
        <h1 v-html="result"></h1>

    <section id="randomAnswer" class="responseBtns">
        <button v-html="incorrect_answer" class="Question"></button>
        <button v-html="correct_answer" class="Question2"></button>
        <button v-html="incorrect_answer1" class="Question 3"></Button>
        <button v-html="incorrect_answer2" class="Question 1"></button>
    </section> 

</template>

<style>

*{
    margin: 0.1rem;
}

h1{
    margin-bottom:50px;
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: x-large;
    text-align: center;
}

.Question {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.5em;
    font-weight: 300;
    color: black;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #000;
    margin-bottom: 40px;
    font-family: 'JetBrains Mono', monospace;
}

.Question2 {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.5em;
    font-weight: 300;
    color: black;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #000;
    margin-bottom: 40px;
    font-family: 'JetBrains Mono', monospace;
}

.Question3 {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.5em;
    font-weight: 300;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #000;
    margin-bottom: 40px;
    font-family: 'JetBrains Mono', monospace;
}

.Question4 {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.5em;
    font-weight: 300;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #000;
    font-family: 'JetBrains Mono', monospace;   
}

.responseIcon{
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>