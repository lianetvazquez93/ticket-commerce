import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { requestValidator } from "../middlewares/request-validator";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  requestValidator,
  (req: Request, res: Response) => {}
);

export { router as signinRouter };
