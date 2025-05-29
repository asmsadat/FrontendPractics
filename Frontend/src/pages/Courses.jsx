import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ImSpinner } from "react-icons/im";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import CourseCard from "./../components/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        setError(null);
      })
      .catch((err) => {
        console.error("Error loading students:", err);
        setError("Failed to load student data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      courseId: courses.length ? courses[courses.length - 1].courseId + 1 : 1,
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
      <div className="flex justify-center items-center mt-6 mb-4 px-4">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 border-1 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 transition"
        >
          <IoMdAddCircleOutline /> Add Course
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg border border-blue-900 p-6 sm:p-6 w-11/12 sm:max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">
              Add New Course
            </h2>
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
                type="number"
                name="courseFee"
                placeholder="Course Fee"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.courseFee}
                onChange={handleInputChange}
              />
              <input
                type="number"
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
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 flex-1 w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition-all duration-200"
                  >
                    <MdCheckCircle /> Add Course
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex items-center justify-center gap-2 flex-1 w-1/2 bg-red-500 text-white py-2 rounded hover:bg-red-800 transition-all duration-200"
                  >
                    <MdCancel /> Cancel
                  </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="text-2xl text-center font-bold mb-6 text-blue-900">
          All Courses
        </h1>
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <ImSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : courses.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No courses available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.courseId}
                course={course}
                onDelete={handleDeleteCourse}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
