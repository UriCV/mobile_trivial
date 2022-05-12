<script>

export default {

    data() {
        return {
            difficulty: 'medium',
            easy: false,
            medium: true,
            hard: false,
        }
    },

    methods: {
        setDifficulty(select) {
            select === 'easy' ? this.easy = true : this.easy = false
            select === 'medium' ? this.medium = true : this.medium = false
            select === 'hard' ? this.hard = true : this.hard = false
            
            this.difficulty = select
            console.log(this.difficulty)
        }
    },

    created(){
        if (localStorage.getItem('difficulty')) {
            this.difficulty = localStorage.getItem('difficulty');
            this.setDifficulty(this.difficulty);
        }
    },

    watch: {
        difficulty: {
            handler() {
                localStorage.setItem('difficulty', this.difficulty);
            }
        },
    },
}

</script>

<template>

    <section class="selectDificulty">
        <h2>Choose your dificulty:</h2>
        <div class="dificultyBtns">
            <button class="easy" @click="setDifficulty(easy)">EASY</button>
            <button class="medium" @click="setDifficulty(medium)">MEDIUM</button>
            <button class="hard" @click="setDifficulty(hard)">HARD</button>
        </div>
    </section>
    

    <h2>Choose a Category</h2>
    <section class="category">

        <div class="iconsLeft">
            <img src="@/icons/art.png" alt="">
            <img src="@/icons/history.png" alt="">
            <img src="@/icons/entertainment.png" alt="">
            <img src="@/icons/random.png" alt="">
        </div>

        <div class="categoryBtns">
            <button  id="art" class="artBtn">Art & Literature</button>
            <button  id="geography" class="geographyBtn">Geography</button>
            <button  id="history" class="historyBtn">History</button>
            <button  id="science" class="scienceBtn">Science & Nature</button>
            <button  id="entertainment" class="entertainmentBtn">Entertainment</button>
            <button  id="sports" class="sportsBtn">Sports & Leisure</button>
            <button  id="random" class="randomBtn">Random</button>
        </div>

        <div class="iconsRight">
            <img src="@/icons/geography.png" alt="">
            <img src="@/icons/science.png" alt="">
            <img src="@/icons/sport.png" alt="">
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
    gap: 0.1rem;
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
    gap: 90px;
}

.iconsRight{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 90px;
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
    font-weight: 600;
}

.dificultyBtns button:hover{
    /* opaque */
    opacity: 0.5;
}

.dificultyBtns{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

.selectDificulty{
    margin-bottom: 3rem;
}


</style>
