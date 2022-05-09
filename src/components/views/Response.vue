<template>

<img class="questionIcon" src="@/components/icons/question.png" alt="">
<h1>{{result.question}}</h1>
<div class="options">
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
</div>

</template>

<script>

import axios from "axios";

export default {
    data: () => ({
        result: null
    }),
    created() {
        axios.get("https://opentdb.com/api.php?amount=1&type=multiple").then((result) => {
        this.result = result.data.results[0];
        console.log(result.data.results[0].question);
        })
    }
};

</script>

<style scoped>

.options{
    
}

.options button{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
    font-size: 20px;
}

h1{
    font-weight: 800;
}
</style>
