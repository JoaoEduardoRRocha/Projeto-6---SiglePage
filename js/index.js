import { Router } from './router.js';

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/tenis", "/pages/tenis.html")
router.add("/looks", "/pages/looks.html")
router.add("/contato", "/pages/contato.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


