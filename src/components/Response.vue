<script setup>

</script>

<template>
<img class="questionIcon" src="./icons/question.png" alt="">
<h1>Question?</h1>
<div class="options">
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
<button @click="toggle">toggle</button>
</div>


</template>

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
