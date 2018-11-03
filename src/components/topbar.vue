<template>
    <div class="topbar">
        <div class="item logo">LOGO HERE</div>
        <div class="item title">DASHBOARD</div>
        <div class="connect">
          <!-- if logged off :  -->
          <div class="item login">LOGIN</div>
          <!-- else :  -->
          <!-- <div class="item disconnect">DISCONNECT</div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'topbar',
  data() {
    return {
      name: 'Netm4ul',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar{
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color:#FFF;
  height: 3em;
  text-align: left;
  background-color: #f50;
  flex-flow: row wrap;
}
.item {
  flex: 0 1 0;
  width: 10vw;
  min-width: 150px;
  height: 100%;
  background-color: #0F0;
}

.logo {
  left: 0px;
}

.title {
  text-align: center;
}


</style>
