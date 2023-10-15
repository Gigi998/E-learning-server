import express from "../index";
const router = express.Router();
import handleRegister from "../controllers/register.controller";
import { customValidator } from "../utils/helpers";
import { Validators } from "../utils/validatorDto";

router.route("/").post(customValidator(Validators.BODY, ["email", "pwd"]), handleRegister);

module.exports = router;
