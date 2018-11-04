<template>
    <div class="nodes-container">
        <node v-for="node in this.nodes" :key="node.id" :id="node.id"></node>
    </div>
</template>

<script>

import node from "./node";
import store from "../main.js";
import axios from "axios";

export default {
    name: 'nodesbar',
    created(){
        this.fetchNodes()
        setInterval(function(){
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
            axios
            .get(
                'http://127.0.0.1:8000/api/v1/nodes',
                {
                    headers: {
                        "X-Session-Token":"testtoken",
                    }
                }
            )
            .then(response => {
                this.nodes = response.data.data;
                store.setNodes(this.nodes)
                console.log(this.nodes)
            })
        } 
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
  padding: 1em 0 1em 0;
  justify-content: space-around;
}
</style>
