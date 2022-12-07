const express = require("express")
const { app } = require("firebase-admin")
const { addEmployye, getAllEmployee, getEmployee, removeEmployee,updateEmployee } = require("../Controller/Employee")
const router = express.Router()

router.post("/AddEmployee", addEmployye)
router.get("/GetEmployee", getAllEmployee)
router.get("/GetEmployee/:id", getEmployee)
router.delete("/RemoveEmployee/:id", removeEmployee)
router.put("/UpdateEmployee/:id", updateEmployee)




module.exports = {
    router: router
}