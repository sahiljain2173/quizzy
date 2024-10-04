export const validateEmail = (email) => {
  const re = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
};
