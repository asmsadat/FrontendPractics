import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    website: "",
    company: "",
    street: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: formData.name,
      username: formData.username,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
      address: {
        street: formData.street,
        city: formData.city,
        zipcode: formData.zipcode,
      },
    };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      setUsers([...users, newUser]);

      setFormData({
        name: "",
        username: "",
        email: "",
        street: "",
        city: "",
        zipcode: "",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 border text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 transition"
        >
          <IoMdAddCircleOutline /> Add User
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg border border-green-900 p-6 w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-green-800 text-center">
              Add New User
            </h2>
            <form onSubmit={handleAddUser} className="space-y-4">
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
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.username}
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
                name="street"
                placeholder="Street"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.street}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                required
                className="w-full border px-4 py-2 rounded"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              <div className="flex justify-between gap-6">
                <button
                  type="submit"
                  className="w-1/2 bg-blue-700 text-white py-2 rounded hover:bg-blue-900"
                >
                  Add User
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-1/2 bg-red-600 text-white py-2 rounded hover:bg-red-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">
          All Users
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
