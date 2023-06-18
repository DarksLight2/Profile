<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardComponent"
})
</script>

<template>
<div class="flex flex-wrap justify-around">
  <slot />
</div>
</template>

<style scoped>

</style>