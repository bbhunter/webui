<template>
    <div class="sidebar">
        <div class="spacer"></div>
        <router-link to="/ips" class="item"><div>IP</div></router-link>
        <div class="spacer"></div>
        <router-link to="/domains" class="item"><div>.TLD</div></router-link>
        <div class="spacer"></div>
        <router-link to="/ports" class="item"><div>Port</div></router-link>
        <div class="spacer"></div>
        <router-link to="/uris" class="item"><div>URI</div></router-link>
        <div class="spacer"></div>
        <div class="item empty"></div>
        <div class="spacer"></div>
        <router-link to="/config" class="item"><div>Config</div></router-link>
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
    color: #FFF;
    text-decoration: none;
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
