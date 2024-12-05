document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");
    const studentTableBody = document.getElementById("studentTableBody");

    // Load existing students from localStorage
    const loadStudents = () => {
        const students = JSON.parse(localStorage.getItem("students")) || [];
        students.forEach(student => addStudentToTable(student));
    };

    // Save student data to localStorage
    const saveStudents = (students) => {
        localStorage.setItem("students", JSON.stringify(students));
    };

    // Add a student to the table
    const addStudentToTable = (student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.program}</td>
            <td>${student.number}</td>
        `;
        studentTableBody.appendChild(row);
    };

    // Handle form submission
    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const age = document.getElementById("age").value;
        const program = document.getElementById("program").value;
        const number = document.getElementById("number").value;

        const student = { name, surname, age, program, number };

        // Add to table
        addStudentToTable(student);

        // Add to localStorage
        const students = JSON.parse(localStorage.getItem("students")) || [];
        students.push(student);
        saveStudents(students);

        // Reset form
        studentForm.reset();
    });

    // Load students when the page loads
    loadStudents();
});
