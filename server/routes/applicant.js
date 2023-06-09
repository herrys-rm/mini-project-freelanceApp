const route = require("express").Router();
const ApplicantController = require("../controllers/applicant");
const { authRequest, authAdmin, authUserRole } = require("../middlewares/auth");

route.get("/", ApplicantController.getApplicant);
route.get("/find/job/:jobId", ApplicantController.getApplicantById);
route.get("/find/user/:userId", ApplicantController.getApplicantById);
route.get("/find", ApplicantController.getApplicantByJobIdStatus);
route.post("/apply", authRequest, ApplicantController.postApply);
// TODO: admin only
route.delete("/:userId", authRequest, ApplicantController.deleteApplicant);
// TODO: use authUserRole middleware
route.delete("/unapply", authRequest, ApplicantController.deleteApply);
// TODO: admin only
route.put("/accept", authRequest, ApplicantController.acceptApplicant);

module.exports = route;
