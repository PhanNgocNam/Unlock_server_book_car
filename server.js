require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { sequelize } = require("./src/models");
const { Server } = require("socket.io");
const { rootRouter } = require("./src/routes");
const { handleError } = require("./src/middlewares/handleError");
app.use(cors());
app.use(express.json());

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
    const isConnected = await sequelize.authenticate();
    isConnected && console.log(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.log(`Oops. Something went wrong: ${err}`);
  }
});
