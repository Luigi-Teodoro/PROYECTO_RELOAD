import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', {title:'Inicio'}));
router.get('/about', (req, res) => res.render('catalago', {title:'Catalogo'}));
router.get('/contact', (req, res) => res.render('contactanos', {title:'Contactanos'}));
router.get('/login', (req, res) => res.render('log', {title:'login'}));
router.get('/register', (req, res) => res.render('regis', {title:'Registro'}));
router.get('/informacion', (req, res) => res.render('sobre_nosotros', {title:'Nosotros'}));
router.get('/infochaqueta', (req, res) => res.render('info_chaqueta', {title:'Chaqueta'}));


export default router;