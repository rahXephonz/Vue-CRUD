<template>
  <div>
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
export default {
  name: 'App',
  components: {
    SideBar,
  },
};
</script>
