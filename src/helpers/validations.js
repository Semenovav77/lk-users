export const validateFormik = {
  email: (errors, value) => {
    if (!value) {
      errors.email = 'Введите email';
    }
  },
  password: (errors, value) => {
    if (!value) {
      errors.password = 'Введите пароль';
    }
  },
};
