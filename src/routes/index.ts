import { json, Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.get('/lorem', (req, res) => {
    res.send("lorem ipsum dolor sit amet take me back to the night we met");
});

export default router;