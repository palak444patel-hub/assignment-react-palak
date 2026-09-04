import { useState } from "react";
import "./App.css";
import TextAnalyzer from "./components/TextAnalyzer";

const students = [
  {
    name: "Palak Patel",
    course: "BCA",
    semester: "5th Semester",
    email: "ppatel11@gmail.com",
    phone: "9876543210",
    city: "Tankal",
  },
  {
    name: "Riya Patel",
    course: "BCA",
    semester: "4th Semester",
    email: "riya123@gmail.com",
    phone: "9876543211",
    city: "Tankal",
  },
  {
    name: "Pinal Patel",
    course: "BBA",
    semester: "3rd Semester",
    email: "Pinal23@gmail.com",
    phone: "9876543212",
    city: "Navsari",
  },
  {
    name: "Khushi Patel",
    course: "MCA",
    semester: "2nd Semester",
    email:"KP23@gmail.com",
    phone: "9876543213",
    city: "Valsad",
  },
  {
    name: "Hafsa Tandel",
    course: "BCA",
    semester: "5th Semester",
    email: "Hafu44@gmail.com",
    phone: "9876543214",
    city: "Navsari",
  },
  {
    name: "Shabina Shaikh",
    course: "BCA",
    semester: "4th Semester",
    email: "SS55@gmail.com",
    phone: "9876543215",
    city: "Bilimora",
  },
];

function App() {
  const [page, setPage] = useState("students");

  return (
    <div className="app">

      <nav className="navbar">
        <div className="nav-buttons">

          <button
            className={
              page === "students"
                ? "nav-btn active"
                : "nav-btn"
            }
            onClick={() => setPage("students")}
          >
            Student Directory
          </button>

          <button
            className={
              page === "analyzer"
                ? "nav-btn active"
                : "nav-btn"
            }
            onClick={() => setPage("analyzer")}
          >
            Text Analyzer
          </button>

        </div>
      </nav>

      {page === "students" ? (
        <StudentDirectory />
      ) : (
        <TextAnalyzer />
      )}

    </div>
  );
}

function StudentDirectory() {
  return (
    <main className="page">

      <div className="heading-area">

        <div className="small-heading">
          ADVANCED WEB DESIGNING
        </div>

        <h1>Student Directory</h1>

        <div className="student-count">
          {students.length} STUDENTS
        </div>

      </div>

      <div className="student-grid">

        {students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
          />
        ))}

      </div>

    </main>
  );
}

function StudentCard({ student }) {

  /*
    Every StudentCard has its own state.

    This means:
    - Vansh can stay open
    - Noormohammad can stay open
    - Zahid can stay open
    - All can be open together
  */

  const [showDetails, setShowDetails] = useState(false);

  const initials = student.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className="student-card">

      <div className="card-top">

        <div className="avatar">
          {initials}
        </div>

        <div className="student-heading">

          <span>
            STUDENT PROFILE
          </span>

          <h2>
            {student.name}
          </h2>

          <p>
            {student.course} Student
          </p>

        </div>

        <div className="status-dot"></div>

      </div>

      <div className="basic-details">

        <div className="detail-box">

          <span>
            COURSE
          </span>

          <strong>
            {student.course}
          </strong>

        </div>

        <div className="detail-box">

          <span>
            SEMESTER
          </span>

          <strong>
            {student.semester}
          </strong>

        </div>

      </div>

      <button
        type="button"
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails
          ? "Hide Details ↑"
          : "Show Details ↓"}
      </button>

      {showDetails && (
        <div className="extra-details">

          <div className="extra-row">

            <span>
              EMAIL
            </span>

            <strong>
              {student.email}
            </strong>

          </div>

          <div className="extra-row">

            <span>
              PHONE
            </span>

            <strong>
              {student.phone}
            </strong>

          </div>

          <div className="extra-row">

            <span>
              CITY
            </span>

            <strong>
              {student.city}
            </strong>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;