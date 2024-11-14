import express from "express";


const router = express.Router();


router.get("/", (_req, res) => {

    res.send({
        users: []
    })
})

router.post("/", (_req, res) => {

    res.send({
        message: "Create user!",
        users: []
    })
})


export default router;