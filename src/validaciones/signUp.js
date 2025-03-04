export const validationSignUp = {
  nombre: {
    required: {
      value: true,
      message: "El nombre es requerido",
    },
    minLength: {
      value: 3,
      message: "El nombre debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El nombre debe tener menos de 20 caracteres",
    },
  },
  apellido: {
    required: {
      value: true,
      message: "El apellido es requerido",
    },
    minLength: {
      value: 3,
      message: "El apellido debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El apellido debe tener menos de 20 caracteres",
    },
  },
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
      value: 8,
      message: "La contraseña debe tener al menos 8 caracteres",
    },
    maxLength: {
      value: 20,
      message: "La contraseña debe tener menos de 20 caracteres",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "La confirmación de la contraseña es requerida",
    },
    minLength: {
      value: 8,
      message:
        "La confirmación de la contraseña debe tener al menos 8 caracteres",
    },
    maxLength: {
      value: 20,
      message:
        "La confirmación de la contraseña debe tener menos de 20 caracteres",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "La confirmación de la contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
    },
  },
};
