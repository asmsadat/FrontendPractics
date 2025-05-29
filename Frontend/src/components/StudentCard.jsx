import { MdOutlineDelete } from "react-icons/md";

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg border border-gray-200 p-6 hover:border-blue-900">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">
        ID: {student.studentId}
      </h2>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Mobile:</strong> {student.mobile}
      </p>
      <p>
        <strong>Enrolled:</strong> {student.enrollmentDate}
      </p>
      <button
        onClick={() => onDelete(student.studentId)}
        className="flex items-center gap-1 border-2 border-r-2 rounded-md p-2 mt-2 bg-red-500 text-white hover:bg-white hover:text-red-700 hover:border-red-500 text-sm"
      >
        <MdOutlineDelete /> Delete
      </button>
    </div>
  );
};

export default StudentCard;
