<template>
    <div class="node-block">
        <div class="node-title"><span class="node-id">{{ id }}</span></div>
        <div class="spacer"></div>
        <div class="node-main">
			<div class="node-line">
				IP : {{ ip }}
			</div>
			<div class="node-line" v-bind:class="{'success': isAvailable}">
				Available : {{ isAvailable }}
			</div>
			<div class="node-line">
				Project : {{ project }}
			</div>
            <div class="node-line">
                Modules : 
                <div class="module-list">
                    <div class="node-module" v-for="m in modules" :key="m" :style="{ backgroundColor: getModuleColor(m) }">
                        {{ m }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import store from "@/store.js"
import ColorHash from "color-hash"

export default {
	name: 'node',
	created(){
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
    min-width: 12em;
    max-width: 25%;
    min-height: 7em;
    border: 1px solid #1c2532;
    margin: 1em 0 1em 0;
    padding: 0 2% 0 2%;
    text-align: left;
    flex-grow: 1;
}
.node-line{
    line-height: 1.3em;
}
.node-module{
    background-color: #323e4f;
    margin: 0.2em;
    padding: 0.2em 0.3em 0.2em 0.3em;
    line-height: 1.6em;
    text-align: center;
    border: 1px solid #1c2532;
    flex-grow: 1;
    flex-wrap: wrap;
}
.node-main {
    margin: 2% 0 2% 2%;
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
