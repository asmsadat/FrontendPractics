import { useState } from "react";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enrollmentDate: "",
  });

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
  };

  return (
    <div className="bg-white bg-opacity-40 flex justify-center items-center z-50 mt-20">
      <div className="bg-white rounded-lg shadow-lg border border-blue-900 p-6 w-full max-w-md relative">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">
          Add New Student
        </h2>
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2  bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
