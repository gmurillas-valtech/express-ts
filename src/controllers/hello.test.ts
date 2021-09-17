import { Request, Response, NextFunction } from "express";
import helloController from "./hello";

test("test hello controller to return Hello World", () => {
  const send = jest.fn();
  const req = {} as Request;
  const res = { send } as any as Response;
  const next: NextFunction = () => null;

  helloController(req, res, next);

  expect(send.mock.calls.length).toBe(1);
  expect(send.mock.calls[0][0]).toBe("Hello World!");
});
