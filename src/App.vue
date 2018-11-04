<template>
  <div id="app">
    <div id="root">
      <topbar></topbar>
      <sidebar></sidebar>
      <router-view/>
    </div>
  </div>
</template>

<script>

import topbar from '@/components/topbar';
import sidebar from '@/components/sidebar';

export default {
  name: 'App',
  components: { topbar, sidebar }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #1c2532;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
