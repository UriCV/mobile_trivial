<script>

</script>

<template>

    <main>
        <img class="mainIcon" src="@/icons/titleIcon.png" alt="">

        <div class="title">
            <h1>Trivial Game</h1>
        </div>

        <img src="@/icons/info.png" class="infoIcon">

        <router-link to="category" class="startBtn">
            <img class="startIcon" src="@/icons/start.png" alt="">
        </router-link>
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
    animation: rotation 40s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
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
    font-weight: 600;
}

.startBtn{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: -1.5rem;
}

.startIcon{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
}

.infoIcon{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

}

</style>
