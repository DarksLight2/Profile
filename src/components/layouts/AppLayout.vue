<script>
import {defineComponent} from 'vue'
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";

export default defineComponent({
  name: "AppLayout",
  components: {HeaderComponent},
})

</script>

<template>
  <div class="font-montserrat">
    <slot name="before-header" />
    <header-component />
    <slot />
  </div>
</template>

<style scoped>

</style>