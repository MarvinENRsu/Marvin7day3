<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" class="bt-slid bt-next">Next</button>
    <button @click="prev" class="bt-slid bt-prev">Back</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<style lang="sass" scoped>
.carousel
  position: relative
  overflow: hidden
  width: 800px
  height: 500px
  z-index: 10
  margin-left: 20px

button
  position: absolute
  height: 40px
  width: 50px
  top: calc(50% - 20px)
  background-color: black


.bt-slid
  padding: 5px 10px
  background-color: rgba(0,0,0,0.5)
  border: 1px solid transparent
  margin: 5px 10px
  color: #FFF
  height: 50px
  width: 50px
  position: absolute
  margin-top: -25px
  z-index: 2

.bt-slid:hover
  cursor: pointer
  background-color: black

.bt-slid:focus
  outline: none

.bt-next
  top: 50%
  right: 0

.bt-prev
  top: 50%
  left: 0
</style>
