import { Router } from 'express';

const router = Router();

// Config routes
router.get('/', (req, res) => res.render('index', { title: ' Conversion Bases | Node App' }));

router.get('/error', (req, res) => res.render('error', { title: '404 Error' }));

export default router;