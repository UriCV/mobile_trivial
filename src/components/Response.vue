<script setup>

</script>

<template>
<img class="questionIcon" src="./icons/question.png" alt="">
<h1>Question?</h1>
<div class="options">
<button v-on:click="">Add 1</button>
<button v-on:click="">Add 1</button>
<button v-on:click="counter += 1">Add 1</button>
<button v-on:click="counter += 1">Add 1</button>
</div>


</template>

<style scoped>

.options{
    
}
.options input{
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
