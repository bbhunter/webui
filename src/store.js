var store = {
    debug: false,
    state: {
        nodes: []
    },
    setNodes(newValue) {
        if (this.debug) console.log('setNodes triggered with', newValue)
        this.state.nodes = newValue
    },
    getNodes(nid) {
        if (this.debug) console.log('getNodes triggered with', nid)
        return this.state.nodes[nid]
    },
    clearNodes() {
        if (this.debug) console.log('clearNodes triggered')
        this.state.nodes = ''
    }
}

export default store