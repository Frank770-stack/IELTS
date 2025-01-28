import Student from "../models/resultModel.js";

export const addStudentScores = async (req, res) => {
  const {
    name,
    idNumber,
    studentNumber,
    centerNumber,
    nationality,
    passportNumber,
    scores,
  } = req.body;

  // Validate input
  if (
    !name ||
    !idNumber ||
    !studentNumber ||
    !centerNumber ||
    !nationality ||
    !passportNumber ||
    !scores
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    // Check if the student already exists
    const existingStudent = await Student.findOne({ idNumber, studentNumber });
    if (existingStudent) {
      return res
        .status(400)
        .json({ success: false, message: "Student record already exists." });
    }

    // Create a new student record
    const student = new Student({
      name,
      idNumber,
      studentNumber,
      centerNumber,
      nationality,
      passportNumber,
      scores,
    });

    // Save the student record
    await student.save();

    res
      .status(201)
      .json({ success: true, message: "Student scores added successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Fetch Results Controller
export const getStudentScores = async (req, res) => {
  const { name, idNumber, studentNumber } = req.body;

  if (!name || !idNumber || !studentNumber) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    // Use trimmed and case-insensitive matching for the query
    const student = await Student.findOne({
      name: { $regex: new RegExp(`^${name.trim()}$`, "i") },
      idNumber: idNumber.trim(),
      studentNumber: studentNumber.trim(),
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "No record found. Please check your details.",
      });
    }

    res.json({
      success: true,
      studentDetails: {
        name: student.name,
        idNumber: student.idNumber,
        studentNumber: student.studentNumber,
        centerNumber: student.centerNumber,
        nationality: student.nationality,
        passportNumber: student.passportNumber,
      },
      scores: student.scores,
    });
  } catch (error) {
    console.error("Error retrieving student scores:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
