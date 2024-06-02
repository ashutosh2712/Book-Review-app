import { Router } from "express";
import { Users } from "../../mongoose/schemas/Users.mjs";

const router = Router();

router.post("/api/users", async (request, response) => {
  //   console.log(request.body);
  const { body } = request;
  const newUser = new Users(body);
  try {
    const savedUser = await newUser.save();
    return response.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    return response.statusCode(400);
  }
});

export default router;
