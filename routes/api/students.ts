import express from "../../index";
const router = express.Router();
import {
  getAllStudents,
  updateStudentBook,
  addNewStudent,
  getSingleStudent,
  removeBookFromStudent,
  deleteStudent,
  updateStudent,
} from "../../controllers/students.controller";
import { customValidator } from "../../utils/helpers";
import { Validators } from "../../utils/validatorDto";

router
  .route("/")
  .get(getAllStudents)
  .patch(customValidator(Validators.BODY, ["studentId", "bookId"]), updateStudentBook)
  .post(customValidator(Validators.BODY, ["name", "email"]), addNewStudent)
  .delete(customValidator(Validators.BODY, ["id"]), deleteStudent);

router
  .route("/:id")
  .get(customValidator(Validators.PARAMS, ["id"]), getSingleStudent)
  .patch(customValidator(Validators.PARAMS, ["id"]), removeBookFromStudent);

router
  .route("/update/:id")
  .patch(
    customValidator(Validators.PARAMS, ["id"]),
    customValidator(Validators.BODY, ["name", "email"]),
    updateStudent
  );

module.exports = router;
