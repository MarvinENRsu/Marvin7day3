<template>
    <div id="app">
      <button class="btn primary" @click="showModal= true">
          Show Modal 
        </button>
<transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal"></div>
</transition>
      <transition name="slide" appear>
        <div class="modal" v-if="showModal">
          <h1>แบบทดสอบข้อที่ 2</h1>
          <p> </p>
          <button class="btn danger" @click="showModal = false">CloseModal</button>
        </div>
      </transition>

    </div>
        
    
  
      
</template>

<script>
export default {
  el: "#app",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    eventclick(message) {
      alert(message);
    },
  },
};
</script>

<style lang="sass" scoped>

.testmodal
  background-color: #333
  width: 80%
  display: flex
  align-items: center
  justify-content: center

.modal
  position: fixed
  top: 30%
  left: 40%
  right: 50%
  transform: framslate(-50%,-50%)
  z-index: 99
  border: 2px solid #666565ee

  width: 100%
  max-width: 400px
  background-color: #FFF
  border-radius: 16px
  padding: 25px

  h1
    text-align: left
    font-size: 32px
    font-weight: 900
    margin-button: 15px

  p
    margin-bottom: 50px
    margin-top: 20px
    text-align: left
</style>
