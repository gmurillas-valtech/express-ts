import { RequestHandler } from "express";

const index: RequestHandler = (req, res) => {
  res.send("Hello World!");
};

export default index;
