<template>
<div id="root">
    <topbar></topbar>
    <sidebar></sidebar>
    <div id="container">
      <statusbar></statusbar>
      <dm-divider size="large"></dm-divider>
      <nodesbar></nodesbar>
    </div>
</div>
</template>

<script>
import topbar from './topbar';
import sidebar from './sidebar';
import statusbar from './statusbar';
import nodesbar from './nodesbar';

export default {
    
  name: 'index',
  data() {
    return {
      name: 'Netm4ul',
    };
  },
  components: { topbar, sidebar, status, statusbar, nodesbar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container{
  margin-left: 5em;
  margin-right: 5em;
  padding-top: 3em;
  padding-left: 5em;
  top:0;
  left:0;
  right: 0;
}

.spacer{
  margin-top: 1em;
  margin-bottom: 1em;
  height: 2px;
  width: 100%;
  background-color: #000;
}
</style>
