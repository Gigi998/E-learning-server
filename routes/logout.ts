import express from "../index";
const router = express.Router();
import handleLogout from "../controllers/logut.controller";

router.route("/").get(handleLogout);

module.exports = router;
