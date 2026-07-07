const express = require("express");

const app = express();
const PORT = 3000;

// Temporary in-memory data
const employees = [
    {
        id: 1,
        name: "Temi Kej",
        department: "Engineering"
    },
    {
        id: 2,
        name: "Yomi Johnson",
        department: "HR"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Employee Directory API");
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

// Get all employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});