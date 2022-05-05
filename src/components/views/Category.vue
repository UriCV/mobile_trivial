<script setup>

</script>

<template>
    <router-link to="/response">response</router-link>
    
    <section class="iconsLeft">
        <img src="../icons/start.png" alt="">
        <img src="@/components/icons/" alt="">
        <img src="@/components/icons/" alt="">
        <img src="@/components/icons/" alt="">

    </section>

    <section class="categoryBtns">
        <button>Art & Literature</button>
        <button>Geography</button>
        <button>History</button>
        <button>Science & Nature</button>
        <button>Entertainment</button>
        <button>Sports & Leisure</button>
        <button>Random</button>
    </section>

    <section class="iconsRight">

    </section>
</template>

<style scoped>

.categoryBtns{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
}

.categoryBtns button{
    border-radius: 30px;
    font-size: 18px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iconsLeft{

}

.iconsRight{

}

</style>
