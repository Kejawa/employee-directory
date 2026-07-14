const express = require("express");

const router = express.Router();

const {
    getEmployees,
    createEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

router.get("/", getEmployees);

router.post("/", createEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;