<script>

</script>

<template>
    <main>
        <img class="mainIcon" src="@/assets/icons/titleIcon.png" alt="">
        <div class="title">
            <h1>Trivial Game</h1>
        </div>
        <div class="homeIcons">
            <img src="@/assets/icons/info.png" class="infoIcon">
            <img src="@/assets/icons/iconCustomize.png" class="settingsIcon">
        </div>
        <router-link to="category" class="startBtn">
            <img class="startIcon" src="@/assets/icons/start.png" alt="">
        </router-link>
    </main>
</template>

<style>
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
}

.startIcon{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
}

.homeIcons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

.infoIcon{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.settingsIcon{
    width: 80px;
    height: 80px;
}
</style>
