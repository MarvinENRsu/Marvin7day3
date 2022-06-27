<template>
  <div class="home">
    <FormCard />
    <div>
      <Slider />
    </div>
    
  </div>
</template>

<script>
import FormCard from "@/components/FormCard.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "HomeView",
  components: {
    FormCard,
    Slider,
  },
};
</script>

<style lang="sass" scoped>
.formCenter
  display: flex
  background-color: #fff
  margin-left: 20%
  margin-top: 20px
  border: 2px solid
  height: 400px
  width: 800px
</style>
