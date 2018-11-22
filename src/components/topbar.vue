<template>
  <div class="topbar">
    <div class="item logo">LOGO HERE</div>
    <router-link to="/" class="item title"><div>{{ name }}</div></router-link>
    <!-- if logged off :  -->
    <router-link tag="div" to="/login">
      <div class="item login">
        LOGIN
      </div>
    </router-link>
    <!-- else :  -->
    <!-- <div class="item disconnect">DISCONNECT</div> -->
  </div>
</template>

<script>
import store from "@/store.js"

export default {
  name: 'topbar',
  data() {
    return {
      name: 'DASHBOARD',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar{
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color:#FFF;
  height: 3em;
  text-align: left;
  background-color: #283243;
  flex-flow: row wrap;
  border-bottom: 1px solid #000;
}

.item {
  flex: 0 1 0;
  width: 10vw;
  min-width: 150px;
  height: 100%;
  line-height: 3em;
  text-align: center;
}

.login:hover{
  background-color: #8eacc5;
}

.logo {
  left: 0px;
}

.title {
  text-align: center;
  text-decoration: none;
}
.title:hover{
  background-color: #8eacc5;
}
.title>div{
  color:#fff;
}


</style>
