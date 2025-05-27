import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === formData.email)) {
      alert("User already exists!");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful!");
    navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="mt-3 text-center">Already have an account?<br /> <Link to='/signin' className="text-blue-500 hover:text-blue-700">Sign in</Link> here.</div>
      </form>
    </div>
  );
}

export default Signup;
