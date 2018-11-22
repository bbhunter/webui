import Axios from "axios";

Axios.defaults.headers.common["X-Session-Token"] = "testtoken";

var store = {
    debug: false,
    http: Axios,
    api: {
        protocol: "http://",
        ip: "127.0.0.1",
        prefix: "/api/v1/",
        port: 8000,
        baseurl: this.protocol + this.ip + ":" + this.port + this.prefix
    },
    state: {
        project: "first",
        nodes: [],
        domains : [],
        ips: [],
        ports: {}, //map[ip][]port
        uri: {}, // map[ip][port][]uri
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
    },
    setProject(project){
        this.project = project
    },
    fetchProject(){
        return this.axios
            .get(this.$APIUrl + "projects")
    },
    fetchIPs(project){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips')
    },
    fetchIP(project, ip){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips/' + ip)
    },
    fetchDomains(project){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/domains')
    },
    fetchDomain(project, domain){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/domains/' + domain)
    },
    fectchPorts(project, ip){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips/' + ip + "/ports");
    },
    fectchPorts(project, ip, port){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips/' + ip + "/ports/" + port);
    },
    fectchURIs(project, ip, port){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips/' + ip + "/ports/" + port + "/uris");
    },
    fectchURI(project, ip, port, uri){
        return this.axios
            .get(this.$APIUrl + "projects/" + project + '/ips/' + ip + "/ports/" + port + "/uris/" + uri);
    }
}

export default store