<script>
import {defineComponent} from 'vue'
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  name: "BlogComponent",
  components: {CardItem, CardComponent},
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios({
        url: '/test.json',
      }).then(response => {
        console.log('response:', response);
        console.log('response.data:', response.data);
        this.posts = response.data
      })
    }
  }
})
</script>

<template>
<card-component v-if="posts.length > 0">
  <card-item v-for="post in posts" :key="post.id" :title="post.title" :route="{ name: 'post', params: { id: post.id }}" :description="post.description" :image="post.image" />
</card-component>
</template>

<style scoped>

</style>