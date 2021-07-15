const router = require("express").Router();
const Recruiter = require("../models/recruitersModel");

//register new recruiter
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      domain,
      address,
      email,
      aboutCompany,
      url,
      officialContact,
      nameHrHead,
      emailHrHead,
      phoneNo,
    } = req.body;

    if (
      !name ||
      !domain ||
      !address ||
      !email ||
      !aboutCompany ||
      !url ||
      !officialContact ||
      !nameHrHead ||
      !emailHrHead ||
      !phoneNo
    )
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    const newRecruiter = new Recruiter({
      name,
      domain,
      address,
      email,
      aboutCompany,
      url,
      officialContact,
      nameHrHead,
      emailHrHead,
      phoneNo,
    });

    const savedRecruiter = await newRecruiter.save();
    console.log(savedRecruiter._id);

    return res
      .status(200)
      .json({ successMessage: "Successfully recruiter registered" });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
