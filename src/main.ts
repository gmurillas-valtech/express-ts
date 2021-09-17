import express from "express";

import helloRoutes from "./routes/hello";

const app = express();

app.use("/", helloRoutes);

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
