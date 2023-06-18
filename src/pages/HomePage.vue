<template>
<router-view></router-view>
    <app-layout>
      <template v-slot:before-header>
        <welcome-component />
      </template>
      <div class="bg-primary-300">
        <blog-component />
      </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue";
import BlogComponent from "@/components/BlogComponent.vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";

export default {
  name: 'HomePage',
  components: {WelcomeComponent, BlogComponent, AppLayout},

  methods: {

  },

  data() {
    return {

    }
  }
}
</script>
