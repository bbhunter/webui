<template>
<div id="container">
  <table id="iptable">
    <tr>
      <th>IP</th>
      <th>Network</th>
      <th>Created at</th>
      <th>Updated at</th>
      <th>Action</th>
    </tr>
    <tr v-for="ip in ips" :key="ip.value">
      <td>{{ip.value}}</td>
      <td>{{ip.network}}</td>
      <td>{{ip.created_at}}</td>
      <td>{{ip.updated_at}}</td>
      <td>
        <span class="action-delete" onclick="">
          DELETE
        </span>
      </td>
    </tr>
  </table>
</div>
</template>

<script>

export default {
    
  name: 'ips',
  data() {
    return {
      ips: [
        {value:"127.0.0.1", network:"external", created_at:"??", updated_at:"??"},
        {value:"255.255.255.255", network:"external", created_at:"??", updated_at:"??"},
        {value:"1.1.1.1", network:"external", created_at:"??", updated_at:"??"},
        {value:"1.0.0.1", network:"external", created_at:"??", updated_at:"??"},
        {value:"8.8.8.8", network:"external", created_at:"??", updated_at:"??"},
        {value:"8.4.4.8", network:"external", created_at:"??", updated_at:"??"},
        {value:"9.9.9.9", network:"external", created_at:"??", updated_at:"??"},
      ]
    };
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr{
  line-height: 2em;
}
th{
  background-color: #283243;
}
.action-delete{
  width: 10%;
  background-color:#e1112c;
}

#iptable{
  width: 100%;
  border: 3px solid #18191a;
  table-layout: fixed; /* all same width */
}
</style>
