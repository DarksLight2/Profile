<script>
import {defineComponent} from 'vue'
import CommentEntity from "@/entities/CommentEntity";

export default defineComponent({
  name: "CommentariesComponent",
  props: {
    commentaries: CommentEntity
  }
})
</script>

<template>
  <div>
    {{ commentaries.getAuthor().getUsername() }}
  </div>
</template>

<style scoped>

</style>