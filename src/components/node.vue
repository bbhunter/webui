<template>
    <div class="node-block">
        <div class="node-title"><span class="node-id">{{ id }}</span></div>
        <div class="spacer"></div>
        <div class="node-main">
			<div class="node-info">
				Modules : {{ modules }}
			</div>
			<div class="node-version">
				IP : {{ ip }}
			</div>
			<div class="node-version">
				Project : {{ project }}
			</div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import store from "../main.js"

export default {
	name: 'node',
	created(){
        console.log(store)
        var n = store.getNodes(this.id)
        if(typeof n === "undefined"){
            return
        }
        this.ip = n.ip
        this.isAvailable = n.is_available
        this.modules = n.modules
        this.project = n.project
	},
    data(){
		return {
            ip:"",
            modules:[],
            isAvailable:false,
            project:"",
            store:{},
        }
    },
    props: {
        id:{
            type: String,
            required: true,
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.node-block{
    color:#fff;
    background-color: #232d3d;
    width: 12em;
    height: 7em;
    border: 1px solid #1c2532;
    padding: 0 5px 0 5px;
}
.node-title {
    width: 100%;
    overflow: hidden;
    line-height: 1.5em;
    font-size: 1.5em;
    text-align: center;
    text-overflow: ellipsis;
}
.node-id{
    font-size: 0.6em;
}
.green{
	color: #1bb934;
}
.red{
	color: #e1112c;
}
.warning{
	color: #ffb610;
}
.spacer{
    border-bottom: 1px solid #fff;
}

</style>
