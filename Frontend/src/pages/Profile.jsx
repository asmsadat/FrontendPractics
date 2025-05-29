import { useEffect, useState } from "react";
import { TbUserEdit } from "react-icons/tb";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import {
  getCurrentUser,
  getUserProfile,
  updateUserProfile,
} from "../auth/AuthManager";

const Profile = () => {
  const email = getCurrentUser();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    const profile = getUserProfile();
    setFormData((prev) => ({
      ...prev,
      ...profile,
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
    setShowModal(false);
    alert("Profile updated!");
  };

  const displayOrNA = (value) => value || "N/A";

  return (
    <div>
      <div>
        <div className="flex justify-center items-center mt-6 mb-4 px-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 border text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 transition"
          >
            <TbUserEdit /> Edit Profile
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg border border-blue-900 p-6 sm:p-6 w-11/12 sm:max-w-md relative">
              <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">
                Update Profile
              </h2>
              <form onSubmit={handleSave} className="space-y-4">
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
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full border px-4 py-2 rounded"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  required
                  className="w-full border px-4 py-2 rounded"
                  value={formData.website}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                  className="w-full border px-4 py-2 rounded"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="w-full border px-4 py-2 rounded"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 flex-1 w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition-all duration-200"
                  >
                    <MdCheckCircle /> Save
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex items-center justify-center gap-2 flex-1 w-1/2 bg-red-600 text-white py-2 rounded hover:bg-red-800 transition-all duration-200"
                  >
                    <MdCancel /> Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white bg-opacity-40 flex justify-center items-center z-50 mt-20">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">
            User Profile
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Name:</strong> {displayOrNA(formData.name)}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {displayOrNA(formData.phone)}
            </p>
            <p>
              <strong>Website:</strong> {displayOrNA(formData.website)}
            </p>
            <p>
              <strong>Company:</strong> {displayOrNA(formData.company)}
            </p>
            <p>
              <strong>Address:</strong> {displayOrNA(formData.address)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
