import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', {title:'Inicio'}));
router.get('/about', (req, res) => res.render('catalago', {title:'Catalogo'}));
router.get('/contact', (req, res) => res.render('contactanos', {title:'Contactanos'}));

export default router;