import { Router } from "express";
import prisma from "../db/connection.js";

const router = Router();

router.get("/products", async (req, res, next) => {
  const result = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  res.status(200).json(result);
});

router.post("/products", async (req, res, next) => {
  const response = await prisma.product.create({
    data: req.body,
  });
  res.status(200).json(response);
});

router.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const response = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
    },
  });

  if (!response) {
    return res.status(404).json({ message: "not found data" });
  }

  res.status(200).json(response);
});

router.delete("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const response = await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });

  if (!response) {
    return res.status(404).json({ message: "not found data" });
  }

  res.status(200).json(response);
});

router.put("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  const response = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: body,
  });

  if (!response) {
    return res.status(404).json({ message: "not found data" });
  }

  res.status(200).json(response);
});

export default router;
