<template>
    <div id="container">
      <statusbar></statusbar>
      <dm-divider size="large"></dm-divider>
      <nodesbar></nodesbar>
    </div>
</template>

<script>
import statusbar from './statusbar';
import nodesbar from './nodesbar';

export default {
    
  name: 'index',
  data() {
    return {
      name: 'Netm4ul',
    };
  },
  components: { statusbar, nodesbar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spacer{
  margin-top: 1em;
  margin-bottom: 1em;
  height: 2px;
  width: 100%;
  background-color: #000;
}
</style>
