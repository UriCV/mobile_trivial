<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<body>
    
</body>
<template class="mainPage">

    <img class="mainIcon" src="./icons/titleIcon.png" alt="">

    <div class="title">
        <h1>Trivial Game</h1>
    </div>

    <section class="selectDificulty">
        <h2>Choose your dificulty:</h2>
        <div class="dificultyBtns">
            <button class="easy" @click="setDificulty('easy')">Easy</button>
            <button class="medium" @click="setDificulty('medium')">Medium</button>
            <button class="hard" @click="setDificulty('hard')">Hard</button>
        </div>
    </section>

    <a href="paginaSeleccionDeCategoria" class="startBtn">
        <img class="startIcon" src="./icons/start.png" alt="">
    </a>

</template>

<style scoped>


.mainIcon {
    width: 374px;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2{
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

.startBtn{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.startIcon{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
}

.easy{
    background: #71FF7F;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
}
.dificultyBtns button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    width: 118px;
    height: 45px;
}
.dificultyBtns{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

</style>