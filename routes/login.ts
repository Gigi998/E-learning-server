import express from "../index";
const router = express.Router();
import handleLogin from "../controllers/login.controller";
import { Validators } from "../utils/validatorDto";
import { customValidator } from "../utils/helpers";

router.route("/").post(customValidator(Validators.BODY, ["email", "pwd"]), handleLogin);

module.exports = router;
