<script>

/* export default {
    data() {
        return {
            difficulty: 'medium',
            easy: false,
            medium: true,
            hard: false,
        }
    },
    methods: {
        setDificulty(select) {
            select === 'easy' ? this.easy = true : this.easy = false
            select === 'medium' ? this.medium = true : this.medium = false
            select === 'hard' ? this.hard = true : this.hard = false
            
            this.difficulty = select
            console.log(this.difficulty)
        }
    }
} */

export default {
    data() {
        return {
            category: 'art',
            art: true,
            history: false,
            science: false,
            sports: false,
            geography: false,
            entertainment: false,
            random: false,

        }
    },
    methods: {
        setCategory(event, select) {
            console.log(event.target.id);
            select === 'art' ? this.art = true : this.art = false
            select === 'history' ? this.history = true : this.history = false
            select === 'science' ? this.science = true : this.science = false
            select === 'sports' ? this.sports = true : this.sports = false
            select === 'geography' ? this.geography = true : this.geography = false
            select === 'entertainment' ? this.entertainment = true : this.entertainment = false
            select === 'random' ? this.random = true : this.random = false
            
            this.category = event.target.id
            console.log(this.category)
        }
    }
}

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
            <button @click="(event) => setCategory(event)" id="art" class="artBtn">Art & Literature</button>
            <button @click="(event) => setCategory(event)" id="geography" class="geographyBtn">Geography</button>
            <button @click="setCategory('history')" class="historyBtn">History</button>
            <button @click="setCategory('science')" class="scienceBtn">Science & Nature</button>
            <button @click="setCategory('entertainment')" class="entertainmentBtn">Entertainment</button>
            <button @click="setCategory('sports')" class="sportsBtn">Sports & Leisure</button>
            <button @click="setCategory('random')" class="randomBtn">Random</button>
        </div>

        <div class="iconsRight">
            <img src="@/components/icons/geography.png" alt="">
            <img src="@/components/icons/science.png" alt="">
            <img src="@/components/icons/sport.png" alt="">
        </div>
        
    </section>
</template>

<style>

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
