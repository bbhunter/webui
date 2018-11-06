<template>
    <div class="nodes-container">
        <node v-for="node in this.nodes" :key="node.id" :id="node.id"></node>
    </div>
</template>

<script>

import node from "./node";
import store from "@/store.js"

export default {
    name: 'nodesbar',
    created(){
        this.fetchNodes()
        var ticker = setInterval(function(){
            this.fetchNodes()
        }.bind(this), 5000)
    },
	data() {
		return {
			nodes: [],
		};
    },
    methods:{
        fetchNodes(){
            this.$http
            .get(
                this.$APIUrl + 'nodes',
            )
            .then(response => {
                this.nodes = response.data.data;
                store.setNodes(this.nodes)
            })
        },
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
