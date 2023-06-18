<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WelcomeComponent",
  mounted() {
    this.write('welcome');
  },
  methods: {
    write(ref) {
      const el = this.$refs[ref];
      const text = el.innerHTML;
      let i = 0;

      el.innerHTML = '';

      function writer() {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          setTimeout(writer, text.charAt(i) === ' ' ? 130 : 50);
        }
      }

      writer()

    }
  }
})
</script>

<template>
  <div class="w-full h-screen bg-primary">
    <div class="bg-cover bg-fixed bg-center w-full h-full opacity-20" :style="{'background-image': 'url(' + require('../assets/bg.png') + ')'}"></div>
    <div class="text-4xl text-primary-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" ref="welcome">
      Welcome, on my portfolio. I hope I can be of some help to you.
    </div>
  </div>
</template>

<style scoped>

</style>