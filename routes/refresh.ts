import express from "../index";
import handleRefreshToken from "../controllers/refresToken.controller";

const router = express.Router();

router.route("/").get(handleRefreshToken);

module.exports = router;
