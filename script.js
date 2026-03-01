let students = [];
let editIndex = -1;

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please fill all fields");
        return;
    }

    if (editIndex === -1) {
        
        students.push({
            name: name,
            age: age
        });
    } else {
        
        students[editIndex] = {
            name: name,
            age: age
        };
        editIndex = -1;
    }

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;

    editIndex = index;
}