<template>
  <div class="login">
  <img src="../assets/logo.png">
    <h1>{{ name }}</h1>
    <div id="form">
      <form :action="this.$APIPrefix + 'users/login'" method="POST">
        <dm-input class="input" id="username" label="Username" type="text" placeholder="Username"></dm-input>
        <dm-input class="input" id="password" label="Password" type="password" placeholder="Password"></dm-input>
        <input class="button" type="button" value="Connection">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      name: 'Login',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form{
  background-color: #232d3d;
  border: 2px solid #323e4f;
  width: 200px;
  text-align: left;
  padding: 0 10px 0 10px ;
	margin: auto;
}

.input{
  padding-top: 10px;
}

.button{
  min-width: 100%;
  height: 2.5em;
  border: 1px solid #FFF;
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #1c2532;
  color: #fff;
  text-transform: uppercase;
}

.button:hover{
  background-color: #323e4f;
}

</style>
