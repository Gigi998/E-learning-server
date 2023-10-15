import express from "../../index";
const router = express.Router();
import {
  getAllBooks,
  addNewBook,
  deleteBook,
  getSingleBook,
} from "../../controllers/books.controller";
import { Validators } from "../../utils/validatorDto";
import { customValidator } from "../../utils/helpers";

router
  .route("/")
  .get(getAllBooks)
  .post(customValidator(Validators.BODY, ["title"]), addNewBook)
  .delete(customValidator(Validators.BODY, ["id"]), deleteBook);

router.route("/:id").get(customValidator(Validators.PARAMS, ["id"]), getSingleBook);

module.exports = router;
