import { Router } from "express";
import { Users } from "../utils/constant.mjs";

const router = Router();

router.post("/api/users", (request, response) => {
  //   console.log(request.body);
  const { body } = request;
  const newUser = { _id: Users[Users.length - 1]._id + 1, ...body };
  Users.push(newUser);
  //   console.log(Users);
  return response.status(200).send(newUser);
});

export default router;
