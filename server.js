require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const cors = require("cors");
const { sequelize } = require("./src/models");
const { Server } = require("socket.io");
const { rootRouter } = require("./src/routes");
const { handleError } = require("./src/middlewares/handleError");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
app.use(express.static(path.join(__dirname, "./public")));
app.use(cors());
app.use(express.json());
const db = require("./src/models");

const server = http.createServer(app);

app.use("/api/v1", rootRouter);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["*"],
  },
});

app.use(handleError);

server.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.log(`Oops. Something went wrong: ${err}`);
  }
});
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: " Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Unlock Car",
        email: "unlockcar@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4940",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
