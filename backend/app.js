const express = require("express");
const cors = require("cors");

require("dotenv").config();

const employeeRoutes = require("./routes/employees");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Employee Directory API");
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Employee API is running"
    });
});

// Employee Routes
app.use("/employees", employeeRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});