<template>
<div id="container">
	<div class="add-project-box">
		<div class="add-project">
			<dm-input
				description="Add a new project"
				label="Add a project"
				placeholder="example.com"
				name="project-input">
			</dm-input>
			<dm-button>Add project</dm-button>
		</div>
	</div>

	<dm-divider color="black" size="large"></dm-divider>
	
	<table id="project-table">
		<tr>
			<th>Name</th>
			<th>Created at</th>
			<th>Updated at</th>
			<th>Actions</th>
		</tr>
		<tr v-for="project in state.projects" :key="project.name">
			<td>{{project.name}}</td>
			<td>{{new Date(project.created_at).toLocaleString()}}</td>
			<td>{{new Date(project.updated_at).toLocaleString()}}</td>
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
export default {
	name: 'projects',
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
</style>
