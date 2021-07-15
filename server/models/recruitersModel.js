const mongoose = require("mongoose");

const recruitersSchema = new mongoose.Schema({
  passwordHash: { type: "String" },
  name: { type: "String" },
  domain: { type: "String" },
  address: { type: "String" },
  aboutCompany: { type: "String" },
  email: { type: "String" },
  url: { type: "String" },
  officialContact: { type: "String" },
  nameHrHead: { type: "String" },
  emailHrHead: { type: "String" },
  phoneNo: { type: "String" },
});
module.exports = mongoose.model("Recruiters", recruitersSchema);
