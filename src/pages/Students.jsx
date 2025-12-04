import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error("Error loading student data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="page responsive">
      <h2>ITIS 3135 Students – Introduction Data</h2>

      {loading && <p>Loading student data...</p>}

      {!loading && (
        <div
          className="students-list"
          style={{ textAlign: "left", margin: "0 auto", maxWidth: "800px" }}
        >
          {students.map((student) => (
            <div
              key={student.email}
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                marginBottom: "20px",
                borderRadius: "8px",
                background: "#fafafa",
              }}
            >
              <h3>
                {
                  student.name?.preferred ||
                  `${student.name?.first ?? ""} ${student.name?.last ?? ""}`
                }
              </h3>

              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Section:</strong> {student.section}</p>

              {student.website && (
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={student.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {student.website}
                  </a>
                </p>
              )}

              <p><strong>Personal Background:</strong> {student.personal_background}</p>
              <p><strong>Professional Background:</strong> {student.professional_background}</p>
              <p><strong>Academic Background:</strong> {student.academic_background}</p>
              <p><strong>Platform:</strong> {student.primary_computer_platform}</p>

              <p>
                <strong>Courses:</strong>{" "}
                {Array.isArray(student.courses_taking)
                  ? student.courses_taking.join(", ")
                  : student.courses_taking}
              </p>

              <p><strong>Funny Fact:</strong> {student.funny_thing}</p>
              <p><strong>Additional Info:</strong> {student.anything_else}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
