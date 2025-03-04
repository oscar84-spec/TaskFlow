export const validationLogin = {
  email: {
    required: {
      value: true,
      message: "El email es requerido",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "El email no es valido",
    },
  },
  password: {
    required: {
      value: true,
      message: "La contraseña es requerida",
    },
    minLength: {
      value: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
    },
  },
};
