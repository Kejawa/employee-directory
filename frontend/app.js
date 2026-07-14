const API_URL = "/api/employees";

async function loadEmployees() {

    try {

        const response = await fetch(API_URL);

        const employees = await response.json();

        const table = document.getElementById("employeeTable");

        table.innerHTML = "";

        employees.forEach(employee => {

            table.innerHTML += `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.email}</td>
                    <td>
                        <button onclick="deleteEmployee(${employee.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });

    } catch (error) {

        console.error(error);

        alert("Unable to connect to backend.");

    }

}

document.getElementById("employeeForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const employee = {

        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        email: document.getElementById("email").value

    };

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)

    });

    document.getElementById("employeeForm").reset();

    loadEmployees();

});

async function deleteEmployee(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    loadEmployees();

}

loadEmployees();