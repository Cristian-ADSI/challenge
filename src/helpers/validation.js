export const validEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const emptyFields = (email, password) => {
  if (email.toString().trim() && password.toString().trim()) {
    return true;
  } else {
    return false;
  }
};
