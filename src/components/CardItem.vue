<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardItem",
  props: {
    post: {
      default: []
    },
    route: {

    },
    title: {
      default: 'Unnamed'
    },
    image: {
      default: '',
      required: false
    },
    description: {
      default: '',
    }
  }
})
</script>

<template>
  <router-link :to="route">
    <div class="flex easy-in-out duration-200 flex-col shadow rounded-lg mt-6 bg-primary-200 hover:shadow-lg cursor-pointer hover:scale-105">
      <div class="w-[414px] h-48 bg-cover bg-center rounded-t-lg" :style="{'background-image': 'url(' + this.image + ')'}"></div>
      <div class="mx-3 mt-3 text-title">{{ this.title }}</div>
      <div class="mx-3 mb-3 text-content">{{ this.description }}</div>
    </div>
  </router-link>
</template>

<style scoped>

</style>