
import express from "express";

const router  = express.Router();

router.get("/", (req, res)=> {

    res.json({
        res: "server working"
    })

})

export default router;