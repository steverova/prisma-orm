import {Router} from "express"
import prisma from "../db/connection.js"
const router = Router();

router.get("/categories", async (req, res, next) => {
    const result = await prisma.category.findMany();
    res.status(200).json(result);
  });

export default router;