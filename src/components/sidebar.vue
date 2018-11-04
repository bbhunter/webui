<template>
    <div class="sidebar">
        <div class="spacer"></div>
        <div class="item"><div>IP</div></div>
        <div class="spacer"></div>
        <div class="item"><div>.TLD</div></div>
        <div class="spacer"></div>
        <div class="item"><div>Port</div></div>
        <div class="spacer"></div>
        <div class="item"><div>URI</div></div>
        <div class="spacer"></div>
        <div class="item empty"></div>
        <div class="spacer"></div>
        <div class="item setting"><div>config</div></div>
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
    flex-grow: 0;
    width:100%;
}
.empty{
    flex-grow: 1;
}
.item>div:hover{
    background-color: #8eacc5;
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.spacer{
    border-bottom: 1px solid #000;
}
</style>
