// ✅ User Register Karna (Signup)
export const saveUser = (name, email, phone, password) => {
  let users = JSON.parse(localStorage.getItem('gymUsers')) || [];

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return { success: false, message: 'Email already registered! Please login.' };
  }

  const newUser = { name, email, phone, password };
  users.push(newUser);
  localStorage.setItem('gymUsers', JSON.stringify(users));

  return { success: true, message: 'Account created successfully!' };
};

// ✅ User Login Karna
export const checkLogin = (email, password) => {
  let users = JSON.parse(localStorage.getItem('gymUsers')) || [];

  const foundUser = users.find(
    user => user.email === email && user.password === password
  );

  if (foundUser) {
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    return { success: true, user: foundUser };
  } else {
    return { success: false, message: 'Invalid email or password!' };
  }
};

// ✅ Current User Get Karna
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

// ✅ Logout Karna
export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};

// ✅ Progress Save Karna
export const saveProgress = (progressData) => {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  let allProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

  if (!allProgress[currentUser.email]) {
    allProgress[currentUser.email] = [];
  }

  allProgress[currentUser.email].push({
    ...progressData,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem('userProgress', JSON.stringify(allProgress));
  alert("Progress Saved!");
};

// ✅ Progress Get Karna
export const getProgress = () => {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];

  const allProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
  return allProgress[currentUser.email] || [];
};