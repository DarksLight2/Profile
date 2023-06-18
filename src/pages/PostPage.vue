<script>
import {defineComponent} from 'vue'
import axios from "axios";
import AppLayout from "@/components/layouts/AppLayout.vue";
import CommentariesComponent from "@/components/CommentariesComponent.vue";
import CommentEntity from "@/entities/CommentEntity";

export default defineComponent({
  name: "PostPage",
  computed: {
    CommentEntity() {
      return CommentEntity
    }
  },
  components: {CommentariesComponent, AppLayout},
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      await axios({
        url: "/test.json"
      }).then(response => {
        const post = response.data.filter(post => post.id === parseInt(this.$route.params.id));
        if(post.length > 0) this.post = post[0]
        if(post.length === 0) this.post = null
      })
    }
  },
  data() {
    return {
      post: {
        title: '',
        description: '',
        image: '',
        created_at: '',
      }
    }
  }
})
</script>

<template>
<app-layout>
  <div class="flex justify-center h-full bg-primary-300">
    <div class="flex container bg-primary-200 shadow rounded-lg m-4">
      <div v-if="this.post.image.length > 0" class="bg-cover bg-center w-[500px] h-[500px] bg-no-repeat rounded-tl-lg rounded-bl-lg" :style="{'background-image': 'url(' + this.post.image + ')'}"></div>
      <div class="flex flex-col w-full justify-between">
        <div class="flex ml-2 flex-col">
          <div class="text-title-lg"> {{ this.post.title }}</div>
          <div class="text-content-lg"> {{ this.post.description }}</div>
        </div>
        <div class="p-2 bg-primary-500 w-full rounded-br-lg flex text-primary-300 justify-between">
          <div>
            Created at {{ this.post.created_at }}
          </div>
          <div>
            Author {{ this.post.author }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <commentaries-component :commentaries="new CommentEntity({'id': 0, 'author': {'id': 0, 'username': 'Maksym Kovalets'}})"></commentaries-component>

  <div v-if="!post">Post is undefined</div>
</app-layout>
</template>

<style scoped>

</style>