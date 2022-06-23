const express = require("express");
const httpErrors = require("http-errors");
const cors = require("cors");
require("dotenv").config();

const clientRoute = require("./routes/api.clients");

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api", clientRoute);

app.use((req, res, next) => {
  next(httpErrors.NotFound());
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    status: error.status || 500,
    message: error.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor em execução: http://localhost:${PORT}`)
);
