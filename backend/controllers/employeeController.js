const pool = require("../db/db");

// GET /employees
exports.getEmployees = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM employees ORDER BY id;"
        );

        res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

};

// POST /employees
exports.createEmployee = async (req, res) => {

    const { name, department, email } = req.body;

    if (!name || !department || !email) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    try {

        const result = await pool.query(
            `
            INSERT INTO employees
            (name, department, email)
            VALUES ($1,$2,$3)
            RETURNING *;
            `,
            [name, department, email]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

};

// DELETE /employees/:id
exports.deleteEmployee = async (req, res) => {

    const { id } = req.params;

    try {

        const result = await pool.query(
            "DELETE FROM employees WHERE id=$1 RETURNING *;",
            [id]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                message: "Employee not found"
            });

        }

        res.status(200).json({
            message: "Employee deleted",
            employee: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

};