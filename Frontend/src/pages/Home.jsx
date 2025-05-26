import { useEffect, useState } from "react";
import StudentCard from "./../components/StudentCard";

function Home() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enrollmentDate: "",
  });

  useEffect(() => {
    fetch("/studentInfo.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched students:", data);
        setStudents(data);
      })
      .catch((err) => console.error("Error loading students:", err));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      studentId: students.length
        ? students[students.length - 1].studentId + 1
        : 1,
      ...formData,
    };
    setStudents([...students, newStudent]);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      enrollmentDate: "",
    });
    setShowModal(false);
  };

  const handleDeleteStudent = (id) => {
    const filtered = students.filter((s) => s.studentId !== id);
    setStudents(filtered);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 border-1 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 transition"
      >
        Add Student
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg border-1 border-blue-900 p-6 w-full max-w-md relative">
            
            <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">Add New Student</h2>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="enrollmentDate"
                placeholder="Enrollment Date"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.enrollmentDate}
                onChange={handleInputChange}
              />
              <div className="flex justify-between gap-6">
                <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add Student
              </button>
              <button
              onClick={() => setShowModal(false)}
              className="w-1/2 bg-red-500 text-white py-2 rounded hover:bg-red-700"
            >
              Cancel
            </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 text-blue-900">All Students</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <StudentCard
              key={student.studentId}
              student={student}
              onDelete={handleDeleteStudent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
