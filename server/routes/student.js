const router = require("express").Router();
const Student = require("../models/studentsModels");

//register new student
router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      dateOfBirth,
      phoneNo,
      courseYaer,
      aboutMe,
      experience,
      lastName,
      address,
      email,
      collage,
      website,
      preferredRole1,
      preferredRole2,
    } = req.body;

    if (
      !firstName ||
      !dateOfBirth ||
      !phoneNo ||
      !courseYaer ||
      !aboutMe ||
      !experience ||
      !lastName ||
      !address ||
      !email ||
      !collage ||
      !website ||
      !preferredRole1 ||
      !preferredRole2
    )
      return reo
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingStudent = await Student.findOne({ email });
    if (existingStudent)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    const newStudent = new Student({
      firstName,
      dateOfBirth,
      phoneNo,
      courseYaer,
      aboutMe,
      experience,
      lastName,
      address,
      email,
      collage,
      website,
      preferredRole1,
      preferredRole2,
    });

    const savedStudent = await newStudent.save();
    console.log(savedStudent._id);
    return res
      .status(200)
      .json({ successMessage: "Successfully student registered" });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
