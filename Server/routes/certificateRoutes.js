import express from "express";
import { upload } from "../middleware/multerMiddleware.js";
import { uploadStudentCertificate } from "../controllers/certificateController.js";

const router = express.Router();

router.post(
  "/upload-certificate",
  upload.single("file"),
  uploadStudentCertificate,
);

export default router;
