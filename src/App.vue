<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: "App"
})
export default class App extends Vue {}
</script>