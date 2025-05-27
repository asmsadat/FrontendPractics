import { useEffect, useState } from "react";
import StudentCard from "./../components/StudentCard";
import CourseCard from './../components/CourseCard';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseFee: "",
    courseDuration: "",
    startDate: "",
  });

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched courses:", data);
        setCourses(data);
      })
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      courseId: courses.length
        ? courses[courses.length - 1].courseId + 1
        : 1,
      ...formData,
    };
    setCourses([...courses, newCourse]);
    setFormData({
      courseTitle: "",
      courseFee: "",
      courseDuration: "",
      startDate: "",
    });
    setShowModal(false);
  };

  const handleDeleteCourse = (id) => {
    const filtered = courses.filter((s) => s.courseId !== id);
    setCourses(filtered);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 border-1 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 transition"
      >
        Add Course
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg border-1 border-blue-900 p-6 w-full max-w-md relative">
            
            <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">Add New Course</h2>
            <form onSubmit={handleAddCourse} className="space-y-4">
              <input
                type="text"
                name="courseTitle"
                placeholder="Course Title"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.courseTitle}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="courseFee"
                placeholder="Course Fee"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.courseFee}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="courseDuration"
                placeholder="Course Duration(Week)"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.courseDuration}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="startDate"
                placeholder="Starting date"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.startDate}
                onChange={handleInputChange}
              />
              <div className="flex justify-between gap-6">
                <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add Course
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
        <h1 className="text-2xl font-bold mb-6 text-blue-900">All Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.studentId}
              course={course}
              onDelete={handleDeleteCourse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
