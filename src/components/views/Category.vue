<script>

/* props: {
    dificulty: {
        type: String,
        default: '',
    },
} */

export default {
    data() {
        return {
            category: 'random',
            art: false,
            history: false,
            science: false,
            sports: false,
            geography: false,
            entertainment: false,
            random: true,
        }

    },
    methods: {
        setCategory(event, select) {
            select === 'art' ? this.art = true : this.art = false
            select === 'history' ? this.history = true : this.history = false
            select === 'science' ? this.science = true : this.science = false
            select === 'sports' ? this.sports = true : this.sports = false
            select === 'geography' ? this.geography = true : this.geography = false
            select === 'entertainment' ? this.entertainment = true : this.entertainment = false
            select === 'random' ? this.random = true : this.random = false
            
            this.category = event.target.id
            console.log(this.category)
            this.$router.push({ path:'response', params:{ category: this.category, difficulty: this.difficulty } })
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
            <button @click=" (event) => setCategory(event)" id="art" class="artBtn">Art & Literature</button>
            <button @click=" (event) => setCategory(event)" id="geography" class="geographyBtn">Geography</button>
            <button @click=" (event) => setCategory(event)" id="history" class="historyBtn">History</button>
            <button @click=" (event) => setCategory(event)" id="science" class="scienceBtn">Science & Nature</button>
            <button @click=" (event) => setCategory(event)" id="entertainment" class="entertainmentBtn">Entertainment</button>
            <button @click=" (event) => setCategory(event)" id="sports" class="sportsBtn">Sports & Leisure</button>
            <button @click=" (event) => setCategory(event)" id="random" class="randomBtn">Random</button>
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
    margin-bottom: 1rem;
}

.category{
    display: flex;
    gap: 10px;
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
