<template>
<div id="container">
	<div class="add-target-box">
		<div class="add-target">
			<dm-input
				description="This field must be a port number."
				label="Port number"
				placeholder="80"
				name="port-input">
			</dm-input>
			<dm-input
				description="This field must be a ip address."
				label="IP address"
				placeholder="1.2.3.4"
				name="ip-input">
			</dm-input>
			<dm-button>Add target</dm-button>
		</div>
	</div>

	<dm-divider color="black" size="large"></dm-divider>
	
	<table id="iptable" >
		<tr>
			<th>Number</th>
			<th>Created at</th>
			<th>Updated at</th>
			<th>Actions</th>
		</tr>
		<tr v-for="port in state.ports" :key="port.name">
			<td>{{port.number}}</td>
			<td>{{new Date(port.created_at).toLocaleString()}}</td>
			<td>{{new Date(port.updated_at).toLocaleString()}}</td>
			<td>
				<div class="actions">
					<div class="action action-red" onclick="">
						<dm-icon class="action-icon" name="close"></dm-icon>
					</div>
					<div class="action action-green" onclick="">
						<dm-icon class="action-icon" name="done"></dm-icon>
					</div>
				</div>
			</td>
		</tr>
	</table>
</div>
</template>

<script>

import store from "@/store.js"

export default {
	name: 'ports',
	created(){

	},
	data() {
		return {
			state : store.state
		};
	},
	methods:{
	},
	components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.add-target-box{
  display: flex;
  width: 100%;
  justify-content: center;
}
.add-target{
	width: 50%;
}
tr{
	line-height: 2em;
}
th{
	background-color: #283243;
}
.action-green{
	background-color:#1bb934;
}
.action-red{
	background-color:#e1112c;
}
.action-icon{
}
.action{
	padding: 0.2em;
	margin:0 0.4em 0 0.4em;
	display: flex;
	flex-grow: 1;
	justify-content: center;
}
.actions{
	justify-content: space-around;
	display: flex;
	line-height: 1.5em;
	flex-direction: row;
	flex-wrap: nowrap;
}
#iptable{
	width: 100%;
	border: 3px solid #18191a;
	table-layout: fixed; /* all same width */
}
</style>
