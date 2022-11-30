/*
===|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|======|ANOTAÇÕES|===
=========================================================================================================================================================


import './router.js';

const routes = {
    "/": "/pages/home.html",
    "/tenis": "/pages/tenis.html",
    "/looks": "/pages/looks.html",
    "/contato": "/pages/contato.html",
    404: "/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    // pushState: ({tipo de dado}, "vazio", evento ou target)
    window.history.pushState({}, "", event.target.href)
    handle()
}

function handle() {
    // const pathname = window.location.pathname
    // versão desestruturada
    const { pathname } = window.location // coloque como  umaconstante <- ncontre o pathname <- dentro do location
    const route = routes[pathname] || routes[404]        
    fetch(route)
    .then(data => data.text())  // .then(function(data) { return data.text()})
    .then(html => {
    document.querySelector("#app").innerHTML = html;
})
}

handle()

window.onpopstate = () => handle()
window.route = () => route()


*/