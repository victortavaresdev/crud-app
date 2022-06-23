const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/clients", async (req, res, next) => {
  try {
    const allClients = await prisma.client.findMany();

    res.json(allClients);
  } catch (error) {
    next(error);
  }
});

router.post("/clients", async (req, res, next) => {
  try {
    const createdClient = await prisma.client.create({
      data: req.body,
    });

    res.status(201).json(createdClient);
  } catch (error) {
    next(error);
  }
});

router.get("/clients/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientData = await prisma.client.findUnique({
      where: { id: Number(id) },
    });

    res.json(clientData);
  } catch (error) {
    next(error);
  }
});

router.put("/clients/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedClient = await prisma.client.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.json(updatedClient);
  } catch (error) {
    next(error);
  }
});

router.delete("/clients/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedClient = await prisma.client.delete({
      where: { id: Number(id) },
    });

    res.json(deletedClient);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
