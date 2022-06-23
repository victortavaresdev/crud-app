const router = require("express").Router();

const ClientControler = require("../controllers/ClientController");

router.get("/clients", ClientControler.getClients);
router.get("/clients/:id", ClientControler.getClient);

router.post("/clients", ClientControler.postClient);

router.put("/clients/:id", ClientControler.updateClient);

router.delete("/clients/:id", ClientControler.deleteClient);

module.exports = router;
