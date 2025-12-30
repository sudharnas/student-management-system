let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let className = document.getElementById("className").value.trim();

    if (name === "" || roll === "" || className === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, roll, className });
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("className").value = "";

    displayStudents();
}

function displayStudents() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.className}</td>
                <td>
                    <button class="action-btn delete" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
