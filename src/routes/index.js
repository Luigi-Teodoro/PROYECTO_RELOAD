import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', {title:'Inicio'}));
router.get('/about', (req, res) => res.render('catalago', {title:'Catalogo'}));
router.get('/contact', (req, res) => res.render('contactanos', {title:'Contactanos'}));
router.get('/login', (req, res) => res.render('login', {title:'login'}));
router.get('/register', (req, res) => res.render('register', {title:'Registro'}));
router.get('/informacion', (req, res) => res.render('sobre_nosotros', {title:'Nosotros'}));

export default router;