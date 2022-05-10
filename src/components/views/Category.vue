<script setup>

</script>

<template>
    <h2>Choose a Category</h2>
    <section class="category">

        <div class="iconsLeft">
            <img src="@/components/icons/art.png" alt="">
            <img src="@/components/icons/history.png" alt="">
            <img src="@/components/icons/entertainment.png" alt="">
            <img src="@/components/icons/random.png" alt="">
        </div>

        <div class="categoryBtns">
            <button @click="$router.push('response')" class="artBtn">Art & Literature</button>
            <button @click="$router.push('response')" class="geographyBtn">Geography</button>
            <button @click="$router.push('response')" class="historyBtn">History</button>
            <button @click="$router.push('response')" class="scienceBtn">Science & Nature</button>
            <button @click="$router.push('response')" class="entertainmentBtn">Entertainment</button>
            <button @click="$router.push('response')" class="sportsBtn">Sports & Leisure</button>
            <button @click="$router.push('response')" class="randomBtn">Random</button>
        </div>

        <div class="iconsRight">
            <img src="@/components/icons/geography.png" alt="">
            <img src="@/components/icons/science.png" alt="">
            <img src="@/components/icons/sport.png" alt="">
        </div>
        
    </section>
</template>

<style scoped>

h2{
    display: flex;
    justify-content: center;
    font-weight: 800;
}

.category{
    display: flex;
    margin: 2rem;
    gap: 20px;
}

.categoryBtns{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.categoryBtns button{
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iconsLeft{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 140px;
}

.iconsRight{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 140px;
}

.artBtn{
    background: var(--art);
}

.geographyBtn{
    background: var(--geography);
}

.historyBtn{
    background: var(--history);
}

.scienceBtn{
    background: var(--science);
}

.entertainmentBtn{
    background: var(--entertainment);
}

.sportsBtn{
    background: var(--sports);
}

.randomBtn{
    background: var(--random);
}



</style>
