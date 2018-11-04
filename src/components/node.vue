<template>
    <div class="node-block">
        <div class="node-title"><span class="node-id">{{ id }}</span></div>
        <div class="spacer"></div>
        <div class="node-main">
			<div class="node-info">
				Modules : 
                <div class="module-list">
                    <div class="node-module" v-for="m in modules" :key="m" :style="{ backgroundColor: getModuleColor(m) }">
                        {{ m }}
                    </div>
                </div>
			</div>
			<div class="node-version">
				IP : {{ ip }}
			</div>
			<div class="node-version">
				Project : {{ project }}
			</div>
			<div class="node-version" v-bind:class="{'success': isAvailable}">
				Available : {{ isAvailable }}
			</div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import store from "../main.js"
import ColorHash from "color-hash"

export default {
	name: 'node',
	created(){
        console.log(store)
        var n = store.getNodes(this.id)
        if(typeof n === "undefined"){
            console.log("Could not get node :", this.id)
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
    methods: {
        getModuleColor(name){
            var colorHash = new ColorHash({hue: 200, saturation:0.8, lightness: 0.25});
            return colorHash.hex(name)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.node-block{
    color:#fff;
    background-color: #232d3d;
    width: 12em;
    min-height: 7em;
    border: 1px solid #1c2532;
    padding: 0 5px 0 5px;
    text-align: left;
}
.node-module{
    background-color: #323e4f;
    margin: 0.2em;
    padding: 0.2em 0.3em 0.2em 0.3em;
    line-height: 1.6em;
    text-align: center;
    border: 1px solid #1c2532;
    align-self: stretch;
}
.node-main {
    margin: 1em 0em 1em 1em;
}
.node-title {
    overflow: hidden;
    line-height: 1.5em;
    font-size: 1.5em;
    text-align: center;
    text-overflow: ellipsis;
}
.module-list{
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}
.node-id{
    font-size: 0.6em;
}
.success{
	color: #1bb934;
}
.error{
	color: #e1112c;
}
.warning{
	color: #ffb610;
}
.spacer{
    border-bottom: 1px solid #fff;
}

</style>
