<template>
<div id="root">
    <topbar></topbar>
    <sidebar></sidebar>
</div>
</template>

<script>
import topbar from './topbar';
import sidebar from './sidebar';

export default {
    
  name: 'index',
  data() {
    return {
      name: 'Netm4ul',
    };
  },
  components: { topbar, sidebar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
