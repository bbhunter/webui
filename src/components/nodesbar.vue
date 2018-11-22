<template>
    <div class="nodes-container">
        <node v-for="node in state.nodes" :key="node.id" :id="node.id"></node>
    </div>
</template>

<script>

import node from "./node";
import store from "@/store.js"

export default {
    name: 'nodesbar',
    created(){

    },
	data() {
		return {
			state: store.state,
		};
    },
    methods:{
    },
	components: { node }
};
</script>


<style>
.nodes-container{
  background-color: #283243;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
