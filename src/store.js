import Axios from "axios";

/*

This file handle all the "local storage" for the frontend application.
It tries to store only what is currently needed.
This is required in this environnement because the state could become very big (dozen of IP * dozen of port * hundred or thousand of URI... )

For example, once a user select an ip, it will only store information about this current IP (and it's sub entities like ports and URI).
We must reset the state of all the sub-entities when switching the "parent" entity.

Each level should reset the level n+1 (see schema below)
============
1.1 project
    2.1 ip
        3.1 port
            4.1 uri
    2.2 domain
============


*/

Axios.defaults.headers.common["X-Session-Token"] = "testtoken";

var store = {};
store.debug = false,
store.http = Axios,
store.api = {
        protocol: "http://",
        ip: "127.0.0.1",
        prefix: "/api/v1/",
        port: 8000,
}

store.api.baseurl = store.api.protocol + store.api.ip + ":" + store.api.port + store.api.prefix
store.state = {
    project: "first",
    nodes: [],
    domains : [],
    ips: [],
    ports: [],
    uri: [],
}
store.setNodes = function(newValue){
    if (store.debug) console.log('setNodes triggered with', newValue)
    store.state.nodes = newValue
}
store.getNodes = function(nid) {
    if (store.debug) console.log('getNodes triggered with', nid)
    return store.state.nodes[nid]
}
store.clearNodes = function() {
    if (store.debug) console.log('clearNodes triggered')
    store.state.nodes = ''
}
store.setProject = function(project){
    store.project = project
    //reset state !
    store.state = {
        project: "first",
        nodes: [],
        domains : [],
        ips: [],
        ports: [],
        uris: [],
    }
}

store.fetchProjects = function(){
    return this.http
        .get(store.api.baseurl + "projects")
}
store.fetchIPs = function(project){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips')
}
store.fetchIP = function(project, ip){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips/' + ip)
}
store.fetchDomains = function(project){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/domains')
}
store.fetchDomain = function(project, domain){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/domains/' + domain)
}
store.fectchPorts = function(project, ip){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips/' + ip + "/ports");
}
store.fectchPort = function(project, ip, port){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips/' + ip + "/ports/" + port);
}
store.fectchURIs = function(project, ip, port){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips/' + ip + "/ports/" + port + "/uris");
}
store.fectchURI = function(project, ip, port, uri){
    return this.http
        .get(store.api.baseurl + "projects/" + project + '/ips/' + ip + "/ports/" + port + "/uris/" + uri);
}
store.setIPs = function(ips){
    console.log("Sets ips : ", ips)
    store.state.ips = ips
    //reset ports
    store.state.ports = {}
    store.state.uris = {}
}

store.setPorts = function(ports){
    console.log("Sets ports : ", ports)
    store.state.ports = ports
    //reset uris
    store.state.uris = {}
}

store.setURIs = function(uris){
    console.log("Sets uris : ", uris)
    store.state.uris = uris
}
store.updatePorts = function(ip){
    //for loop over every ip
    for (var i = 0; i < this.state.ips.length; i++) {
        console.log("inside for loop :", this.state.ips[i], "searching for : ", ip)
        if (ip != this.state.ips[i].value){
            continue
        }
        console.log("found")
        this.fectchPorts(this.project, this.state.ips[i])
        .then((value) => {
            console.log("ports response : ", value)
            //for loop over every ports
            this.fectchURIs(this.project, port)
            .then((value) => {
                console.log("uris response : ", value)
                console.log(value)
            })
            .catch((value) => {
                console.log(err)
            })
        })
        .catch((value) => {
            console.log(err)
        })
    }
}
store.updateAll = function(){
    this.fetchProjects()
    .then((value)=>{
        console.log("projects response : ", value)
        this.setProject(value.data.data[2])

        this.fetchIPs()
        .then((value)=> {
            console.log("ips response : ", value)
            this.setIPs(value.data.data)
        })
        .catch((err)=>{
            console.log("Err in ips : ")
            console.log(err)
        })

        this.fetchDomains()
        .then((value)=> {
            console.log("New domains : ")
            console.log(value)
            // store.domains.push(value...) 
        })
        .catch((err)=>{
            console.log("Err in domains : ")
            console.log(err)
        })
    })
    .catch((err) => {
        console.log("this.state : ", this.state)
        console.log(err)
    })
}

export default store