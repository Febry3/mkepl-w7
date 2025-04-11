import { json, Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.get('/lorem', (req, res) => {
    res.send("lorem ipsum dolor sit amet take me back to the night we met");
});

router.get('/hooh', (req, res) => {
    res.send("hooh");
});

router.get('/home', (req, res) => {
    res.send("homeeee");
});

export default router;