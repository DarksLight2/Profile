<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: {
      default: 'Unnamed',
      required: true
    },
    route: {
      type: String,
      default: '',
      required: false
    },
    route_params: {
      default: {},
      required: false
    },
    href: {
      default: '',
      required: false
    },
  },
  name: "ListItem",
  computed: {
    isActive()
    {
      if(this.route.length > 0) {
        return this.$route.name === this.route
      }

      if(this.href.length > 0) {
        return this.$route.path === this.href
      }

      return false;

    },
    getLink() {
      if(this.route.length > 0) {
        return {name: this.route, params: this.route_params}
      }

      if(this.href.length > 0) {
        return this.href
      }

      return '#'
    }
  }
})
</script>

<template>
<router-link :to="getLink">
  <div class="text-md text-primary-300 p-2 cursor-pointer mx-2 hover:bg-primary-700 rounded" :class="{ 'text-primary-800 bg-primary-300 hover:bg-primary-300 hover:shadow-inner': isActive }">
    {{ this.title }}
  </div>
</router-link>
</template>

<style scoped>

</style>