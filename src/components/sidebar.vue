<template>
    <div class="sidebar">
        <div class="spacer"></div>
        <div class="item">IP</div>
        <div class="spacer"></div>
        <div class="item">.TLD</div>
        <div class="spacer"></div>
        <div class="item">Port</div>
        <div class="spacer"></div>
        <div class="item">URI</div>
        <div class="spacer"></div>
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
    display: flex;
    flex-direction: column;
    background-color: #283243;
    width: 5em;
    position: absolute;
    top: 3em; /* size #283243he top bar, this is kinda crappy in case it changes */
    bottom: 0;
}

.item {
    line-height: 2em;
    text-transform: uppercase;
    height: 2em;
}

.item:hover{
    background-color: #8eacc5;
}

.setting{
    margin-top: auto; /* put it at the bottom */
}

.spacer{
    border-bottom: 1px solid #000;
}
</style>
