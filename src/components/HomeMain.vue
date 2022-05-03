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
<template>
    <main>
        <img class="mainIcon" src="./icons/titleIcon.png" alt="">

        <div class="title">
            <h1>Trivial Game</h1>
        </div>

        <section class="selectDificulty">
            <h2>Choose your dificulty:</h2>
            <div class="dificultyBtns">
                <button class="easy" @click="setDificulty('easy')">EASY</button>
                <button class="medium" @click="setDificulty('medium')">MEDIUM</button>
                <button class="hard" @click="setDificulty('hard')">HARD</button>
            </div>
        </section>

        <a href="paginaSeleccionDeCategoria" class="startBtn">
            <img class="startIcon" src="./icons/start.png" alt="">
        </a>
    </main>
</template>

<style scoped>

main{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.mainIcon {
    width: 374px;
    height: 384px;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1{
    font-family: 'JetBrains Mono', monospace;
    font-weight: 800;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2{
    font-family: 'JetBrains Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
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
}

.medium{
    background: #feef8f;
}

.hard{
    background: #FF7F7F;
}

.dificultyBtns button{
    display: flex;
    justify-content: center;
    align-items: center;
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
