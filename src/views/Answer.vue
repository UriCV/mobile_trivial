<script>
import axios from "axios";
import CorrectIcon from "@/assets/icons/cheque.png";
import IncorrectIcon from "@/assets/icons/cross.png";

export default {

    data: () => ({
        result: null,
        category: '',
        question: '',
        correct_answer: '',
        incorrect_answers: Array,
        answers: Array,
        show: true,
    }),

    created() {
        if (this.$route.params.id == "00") {
            let idArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
            let randomId = idArray.splice(Math.floor(Math.random()*idArray.length), 1)[0].toString();
            this.$route.params.id = randomId;
        }
        if (this.$route.params.id == "01") {
            let idArray = [20, 23];
            let randomId = idArray.splice(Math.floor(Math.random()*idArray.length), 1)[0].toString();
            this.$route.params.id = randomId;
        }
        if (this.$route.params.id == "02") {
            let idArray = [17, 18, 19, 27, 30];
            let randomId = idArray.splice(Math.floor(Math.random()*idArray.length), 1)[0].toString();
            this.$route.params.id = randomId;
        }
        if (this.$route.params.id == "03") {
            let idArray = [10, 11, 12, 23, 14, 15, 16, 26, 29, 31, 32];
            let randomId = idArray.splice(Math.floor(Math.random()*idArray.length), 1)[0].toString();
            this.$route.params.id = randomId;
        }
        axios.get(`https://opentdb.com/api.php?amount=1&category=${this.$route.params.id}&difficulty=${this.$route.params.difficulty}&type=multiple`).then((result) => {
            this.result = result.data;
            this.category = result.data.results[0].category;
            this.question = result.data.results[0].question;
            this.correct_answer = result.data.results[0].correct_answer;
            this.incorrect_answers = result.data.results[0].incorrect_answers;
            this.answers = [];
            for(let i=0; i<this.incorrect_answers.length; i++) {
                this.answers.push(this.incorrect_answers[i]);
            }
            this.answers.splice(Math.floor(Math.random()*(this.answers.length + 1)), 0, this.correct_answer ); 
        })
    },

    methods: {
        checkAnswer(answer) {

            this.show = false;
            if (answer == this.correct_answer) {
                this.checked_answer = CorrectIcon;
            }
            else {
                this.checked_answer = IncorrectIcon;
            }
            for(let i=0; i<this.answers.length; i++){
                if(this.$refs.answers[i].innerText == this.correct_answer){
                this.$refs.answers[i].children[0].classList.add("correctAnswer");

                } else {
                this.$refs.answers[i].children[0].classList.add("IncorrectAnswer");
                }
            }
            

            setTimeout(() => {
                this.$router.push("/category");
            }, 2000);
        }
    }
};
</script>

<template>
        <img v-if="show" class="responseIcon" src="@/assets/icons/question.png" alt="">
        <img v-if="!show" :src="checked_answer" class="responseIcon">
        <h2 v-html="question" class="answer"></h2>
        <div v-for="answer in answers" :key="answer" @click="checkAnswer(answer)" ref="answers" class="responseBtns">
            <button class="" v-html="answer" :answer="answer" :id="$route.params.id"></button>
        </div>
        <router-link v-if="!show" to="category" class="returnBtn">
            <img src="@/assets/icons/nextPage.png">
        </router-link>
</template>

<style>
*{
    margin: 0.1rem;
}

.correctAnswer{
    background-color: #71FF7F;
}

.IncorrectAnswer{
    background-color: #FF7F7F;
}

.responseBtns{
    display: flex;
    flex-direction: column;
    justify-content: center, space-between;
    align-items: center;
    gap: 5rem;
}

.responseBtns button{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: large;
    border-radius: 30px;
    width: 370px;
    height: 45px;
    font-weight: 600;
    margin-top: 1.5rem;
}

h2{
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 800;
    font-size: x-large;
    margin-bottom:50px;
}

.responseIcon{
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>