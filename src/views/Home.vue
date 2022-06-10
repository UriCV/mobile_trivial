<script>

export default{

    data: () => ({
        showModal: false,
    }),


}

</script>

<template>

    <main>
        <img class="mainIcon" src="@/assets/icons/titleIcon.png">
        <div class="title">
            <h1>Trivial Game</h1>
        </div>
        
        <section class="homeIcons">

            <div  id="info">
                <button class="infoBtn" @click="showModal = true">
                    <img class="infoIcon" src="@/assets/icons/info.png">
                </button>
                <transition name="fade" appear>
                    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
                </transition>
                <transition name="slide" appear>
                    <div class="modal" v-if="showModal">
                        <h2 class="modalTitle">How to play</h2>
                        <p class="howTxt">This app is designed to assist the board game and save you from using the question cards. To play, hit start and select a difficulty, then select the category you landed on. If you answer correctly, shoot again! press back and select a new category. In case of wrong answer pass the turn.</p>
                        <button class="modalBtn" @click="showModal = false">Close</button>
                    </div>
                </transition>
            </div>
            <img src="@/assets/icons/iconCustomize.png" class="settingsIcon">
        </section>
        <router-link to="category" class="startBtn">
            <img class="startIcon" src="@/assets/icons/start.png" alt="">
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
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotation 40s infinite linear;
    margin-left: 1.7rem;
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
    margin-top: 1.5rem;
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

.infoBtn{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.infoIcon{
    width: 80px;
    height: 80px;
}

.settingsIcon{
    width: 80px;
    height: 80px;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 90%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 25px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}

.howTxt{
    text-align: justify;
    text-justify: inter-word;
    font-weight: 600;
}

.modalBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: large;
    border-radius: 30px;
    width: 100px;
    height: 45px;
    font-weight: 600;
    background-color: #FF7F7F;
}

.modalTitle{
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 15px;
}

</style>
