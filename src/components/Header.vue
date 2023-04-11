<template>
  <header class="header" id="header" v-cloak>
   <div class="header__parts">
     <div class="header__left-part">
       <h1 class="header__logo">CaseShop</h1>
     </div>
     <div class="header__central-part">
       <router-link to="/" class="header__central-btn">Главная</router-link>
       <router-link to="/contacts" class="header__central-btn">Cвязаться с нами</router-link>
     </div>
     <div class="header__right-part">
       <button class="header__phone" @click="togglePopup('contacts')">
        <span class="header__phone_span">Call me</span>
        </button>
       <transition name="fade">
       <div class="header__popup" v-show="openedPopup === 'contacts'"> 
         <ul class="header__contact">
           <li>
             <p>Владивосток, ул.Русская, 2K</p>
             <a href="tel:8 (914) 344-58-83">8 (914) 344-58-83</a>
           </li>
           <li>
             <p>Находка, ул.Русская, 2K</p>
             <a href="tel:8 (914) 344-58-83">8 (914) 344-58-83</a>
           </li>
         </ul>
       </div>
     </transition>
        <button class="header__phone" @click="togglePopup('search')">
          <svg xmlns="http://www.w3.org/2000/svg" width="19.229" height="22.289" viewBox="0 0 19.229 22.289">
            <path fill="#fff" fill-rule="evenodd" d="M13.3-135.374a8.493,8.493,0,0,1-5.833,1.368l-.014,0h0A8.549,8.549,0,0,1,.072-143.58a8.549,8.549,0,0,1,9.572-7.376,8.549,8.549,0,0,1,7.376,9.572l0,.014v0a8.493,8.493,0,0,1-2.9,5.367l5.107,6.628-.817.63Zm2.8-6.953a7.548,7.548,0,0,0-6.573-7.614,7.546,7.546,0,0,0-8.449,6.511,7.548,7.548,0,0,0,5.675,8.293,7.627,7.627,0,0,0,.817.151,7.563,7.563,0,0,0,8.468-6.525A7.662,7.662,0,0,0,16.1-142.327Z" transform="translate(0 151.028)">
            </path>
          </svg>
        </button>
        <transition name="fade">
          <div class="header__popup" v-show="openedPopup === 'search'"> 
            <SearchInput />
          </div>
        </transition>
        <svg xmlns="http://www.w3.org/2000/svg" width="22.398" height="22.398" viewBox="0 0 22.398 22.398"><path fill="#fff" fill-rule="evenodd" d="M1179.7-389.108a11.145,11.145,0,0,1-6.922,2.4,11.2,11.2,0,0,1-11.2-11.2,11.2,11.2,0,0,1,11.2-11.2,11.2,11.2,0,0,1,11.2,11.2,11.171,11.171,0,0,1-3.409,8.044v0a11.151,11.151,0,0,1-.866.758Zm-.409-1.034a7.242,7.242,0,0,0-6.513-4.077,7.246,7.246,0,0,0-6.515,4.077,10.1,10.1,0,0,0,6.515,2.371A10.1,10.1,0,0,0,1179.293-390.142Zm.81-.757a10.1,10.1,0,0,0,2.816-7.01,10.144,10.144,0,0,0-10.139-10.139,10.144,10.144,0,0,0-10.139,10.139,10.1,10.1,0,0,0,2.816,7.01,8.339,8.339,0,0,1,4.852-4.011,4.848,4.848,0,0,1-2.376-4.171,4.849,4.849,0,0,1,4.847-4.848,4.85,4.85,0,0,1,4.847,4.848,4.846,4.846,0,0,1-2.378,4.171A8.338,8.338,0,0,1,1180.1-390.9Zm-7.323-11.978a3.8,3.8,0,0,1,3.8,3.8,3.8,3.8,0,0,1-3.8,3.8,3.8,3.8,0,0,1-3.8-3.8A3.8,3.8,0,0,1,1172.78-402.878Z" transform="translate(-1161.58 409.109)"></path></svg>
     </div>
   </div>
 </header>
</template>

<script>
import SearchInput from '@/components/UI/SearchInput.vue'

export default {
  name: 'HeaderSection',
  data: () => ({
  openedPopup: null,
}),
methods: {
  togglePopup(popup) {
    this.openedPopup = this.openedPopup === popup ? null : popup;
  },
},
    components : {
      SearchInput
    },
}
</script>


<style scoped>
.header {
    max-width: 100%;
    height: 50px;
    background-color: #141414;
    margin-bottom: 20px;
}

.header__parts{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    max-width: 1500px;
    margin: auto;
}

@media only screen and (max-width: 1530px) {
  .header__parts {
    max-width: 80%;
  }
}

.header__left-part {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
}

.header__logo {
    color: whitesmoke;
}

.header__select {
    background-color: #2c3e50;
    border-radius: 10px;
    width: 130px;
    height: 45px;
    border-radius: 50px;
    background-color: #141414;
    color: whitesmoke;
    text-align: center;
    font-size: 0.88em;
    line-height: 1;
    outline: none;
    border: none;
    cursor: pointer;
}

.header__central-part {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}
@media only screen and (max-width: 900px) {
  .header__central-part {
    display: none;
  }
}

.header__central-btn {
    cursor: pointer;
    background: transparent;
    color: whitesmoke;
    border: none;
    text-decoration: none;
}

.header__right-part{
    display: flex;
    flex-direction: row;
    gap: 25px;
    position: relative;
}
.header__phone {
    background: transparent;
    border: none;
    cursor: pointer;
}
@media only screen and (max-width: 900px) {
  .header__phone {
    display: none;
  }
}

.header__phone_span {
    color: whitesmoke;
}
.header__contact {
    list-style-type: none;
}

.header__popup {
    position: absolute;
    top: 40px;
    right: 15px;
    z-index: 1;
    min-width: 300px;
    height: auto;
    background-color: white;
    padding-top: 1.6em;
    padding-bottom: 1.6em;
    border: 1px solid #141414;
   border-radius: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
