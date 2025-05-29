export const loginUser = (email) => {
  localStorage.setItem("loggedInUser", email);
};

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
};

export const getCurrentUser = () => {
  return localStorage.getItem("loggedInUser");
};

export const getUserProfile = () => {
  const email = getCurrentUser();
  const profiles = JSON.parse(localStorage.getItem("profiles")) || {};
  return profiles[email] || {};
};

export const updateUserProfile = (updatedProfile) => {
  const email = getCurrentUser();
  const profiles = JSON.parse(localStorage.getItem("profiles")) || {};
  profiles[email] = { ...profiles[email], ...updatedProfile };
  localStorage.setItem("profiles", JSON.stringify(profiles));
};

export const registerUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((u) => u.email === email)) return false;
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

export const authenticateUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((u) => u.email === email && u.password === password);
};
