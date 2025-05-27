import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authenticateUser, loginUser } from "../auth/AuthManager";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authenticateUser(formData.email, formData.password);
    if (user) {
      loginUser(user.email);
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
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
          Sign In
        </button>
        <div className="mt-4 text-center text-sm">
          Don't have an account? <br />{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700 underline">
            Sign up
          </Link>{" "}
          here.
        </div>
      </form>
    </div>
  );
}

export default Signin;
