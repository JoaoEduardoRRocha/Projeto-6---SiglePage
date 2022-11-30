export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page;
    }


    route(event) {
        event = event || window.event
        event.preventDefault()
    
        // pushState: ({tipo de dado}, "vazio", evento ou target)
        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        // const pathname = window.location.pathname
        // versão desestruturada
        const { pathname } = window.location // coloque como  umaconstante <- ncontre o pathname <- dentro do location
        const route = this.routes[pathname] || this.routes[404]        
        fetch(route)
        .then(data => data.text())  // .then(function(data) { return data.text()})
        .then(html => {
        document.querySelector("#app").innerHTML = html;
    })
    }
}

// export default new Router()