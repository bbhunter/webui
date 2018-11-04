<template>
    <div class="status-block">
        <div class="status-title">{{ name }}</div>
        <div class="spacer"></div>
        <div class="status-main">
			<div class="status-info">
				Status : <span v-bind:class="{
					'success': ($status=='OK'),
					'error': ($status=='DOWN'),
					'warning': ($status=='TBD')
				}">{{ $status }}</span>
			</div>
			<div class="status-version">
				Version : {{ $version }}
			</div>
        </div>
    </div>
</template>

<script>


export default {
	name: 'status',
	beforeMount() {
		this.$status = "TBD";
		this.$version = "TBD";
	},
    data(){
		return {
			status : this.$status,
        }
    },
    props: {
		name: String,
        endpoint: String,
	},
	methods: {
    	test() {
			console.log(this);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.status-block{
    color:#fff;
    background-color: #232d3d;
    width: 8.5em;
    height: 7em;
    border: 1px solid #1c2532;
    padding: 0 5px 0 5px;
}

.status-title {
    line-height: 1.5em;
    font-size: 1.5em;
    text-align: center;
}

.status-main{
	line-height: 1.3em;
    padding: 0.5em;
    text-align: left;
}

.spacer{
    border-bottom: 1px solid #fff;
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
</style>
