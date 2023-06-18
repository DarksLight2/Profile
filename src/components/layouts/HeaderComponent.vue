<script>
import {defineComponent} from 'vue'
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {ListItem},
  directives: {
    scroll: {
      mounted(el) {
        const scroll = () => {
          if(window.headerStartOffsetTop === undefined) window.headerStartOffsetTop = el.offsetTop;

          if (window.scrollY >= window.headerStartOffsetTop) {
            el.classList.add('sticky');
          } else {
            el.classList.remove('sticky');
          }
        };

        window.addEventListener('scroll', scroll);
        el._scrollListener = scroll;
      },
      unmounted(el) {
        window.removeEventListener('scroll', el._scrollListener);
        delete el._scrollListener;
      }
    }
  }
})
</script>

<template>
  <div class="bg-primary-800 text-primary-300 w-full flex p-2" v-scroll>
    <list-item route="home" title="Home" />
    <list-item route="about" title="About me" />
    <list-item route="contacts" title="Contacts" />
    <list-item route="skills" title="Skills" />
  </div>
</template>

<style>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>