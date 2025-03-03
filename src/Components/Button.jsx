import React from "react";

const Button = ({ texto, clase, tipo }) => {
  return (
    <button
      className={`w-max h-9 rounded-md px-2 ${clase} lg:px-3 xl:px-5`}
      type={tipo}
    >
      {texto}
    </button>
  );
};

export default Button;
