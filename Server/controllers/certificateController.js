import Student from "../models/resultModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import fs from "fs";

export const uploadStudentCertificate = async (req, res) => {
  const { idNumber, studentNumber } = req.body;

  if (!req.file || !idNumber || !studentNumber) {
    return res
      .status(400)
      .json({ success: false, message: "Missing fields or file" });
  }

  try {
    const student = await Student.findOne({ idNumber, studentNumber });
    if (!student) {
      fs.unlinkSync(req.file.path);
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw", // required for PDFs
      folder: "student_certificates",
      public_id: `${student.studentNumber}_certificate`,
      overwrite: true,
    });

    // Save URL to student
    student.certificateUrl = result.secure_url;
    await student.save();

    // Remove local file
    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      message: "Certificate uploaded successfully",
      certificateUrl: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
};
