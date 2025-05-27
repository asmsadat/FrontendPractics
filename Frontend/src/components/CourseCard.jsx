const CourseCard = ({ course, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 hover:border-blue-900">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">
        Course Code: {course.courseId}
      </h2>
      <p>
        <strong>Course Title:</strong> {course.courseTitle}
      </p>
      <p>
        <strong>Course Fee:</strong> {course.courseFee}
      </p>
      <p>
        <strong>Course Duration(Week):</strong> {course.courseDuration}
      </p>
      <p>
        <strong>Starting date:</strong> {course.startDate}
      </p>
      <button
        onClick={() => onDelete(course.courseId)}
        className="border-2 border-r-2 rounded-md p-2 mt-2 bg-red-500 text-white hover:bg-white hover:text-red-700 hover:border-red-500 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default CourseCard;
