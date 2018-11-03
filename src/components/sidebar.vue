<template>
    <div class="sidebar">
        <div class="item">IP</div>
        <div class="item">.TLD</div>
        <div class="item">Port</div>
        <div class="item">URI</div>
        <div class="item setting">config</div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      name: 'Netm4ul',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar{
    z-index: 0;
    display: flex;
    flex-direction: column;
    background-color: #F50;
    width: 5em;
    position: absolute;
    top: 3em;
    bottom: 0;
}
.item {
    border-bottom: 1px solid #000;
    line-height: 2em;
    text-transform: uppercase;
    height: 2em;
}
.item:hover{
    background-color: #FF55FF;
}

.setting{
    margin-top: auto;
}


</style>
