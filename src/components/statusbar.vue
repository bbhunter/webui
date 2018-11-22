<template>
    <div class="status-container">
    <status name="API" endpoint="/api/status/api"></status>
    <status name="Server" endpoint="/api/status/server"></status>
    <status name="WebUI" endpoint="/api/status/webui"></status>
    </div>
</template>

<script>
import status from './status';
import store from "@/store.js"

export default {
	name: 'statusbar',
	data() {
		return {
			name: 'Netm4ul',
		};
	},
	components: { status }
};
</script>


<style>
.status-container{
  background-color: #283243;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em 0 1em 0;
  justify-content: space-around;
}
</style>
