
const addBtn = document.getElementById("addBtn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");

const searchInput = document.getElementById("searchInput");

const studentContainer =
document.getElementById("studentContainer");

const studentCount =
document.getElementById("studentCount");

const toast =
document.getElementById("toast");

let students = [];

function showToast(message){

    toast.innerText = message;

    toast.style.display = "block";

    setTimeout(()=>{
        toast.style.display = "none";
    },2000);
}

function updateCounter(){

    studentCount.innerText =
    students.length;
}

function displayStudents(data){

    if(data.length === 0){

        studentContainer.innerHTML = `
        <div class="empty-state">
            <h2>🎓 No Students Found</h2>
            <p>Add a new student</p>
        </div>
        `;

        return;
    }

    studentContainer.innerHTML = "";

    data.forEach((student,index)=>{

        studentContainer.innerHTML += `

        <div class="student-card">

            <div class="avatar">
                ${student.name.charAt(0).toUpperCase()}
            </div>

            <h2>${student.name}</h2>

            <span class="badge">
                ${student.course}
            </span>

            <p>${student.email}</p>

            <div class="actions">

                <button
                class="edit-btn"
                onclick="editStudent(${index})">
                ✏️ Edit
                </button>

                <button
                class="delete-btn"
                onclick="deleteStudent(${index})">
                Delete
                </button>

            </div>

        </div>

        `;
    });
}

addBtn.addEventListener("click",()=>{

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseInput.value.trim();

    if(!name || !email || !course){

        showToast("Please fill all fields");

        return;
    }

    students.push({
        name,
        email,
        course
    });

    displayStudents(students);

    updateCounter();

    showToast("Student Added Successfully");

    nameInput.value = "";
    emailInput.value = "";
    courseInput.value = "";
});

function deleteStudent(index){

    students.splice(index,1);

    displayStudents(students);

    updateCounter();

    showToast("Student Deleted");
}

function editStudent(index){

    nameInput.value = students[index].name;
    emailInput.value = students[index].email;
    courseInput.value = students[index].course;

    students.splice(index,1);

    displayStudents(students);

    updateCounter();

    showToast("Edit Student Details");
}

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    students.filter(student=>

    student.name
    .toLowerCase()
    .includes(value)

    );

    displayStudents(filtered);
});

