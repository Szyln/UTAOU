import React from 'react';


const FormClickInput = ({ idAndFor, name, type, children }) => {
  return (
    <div
      className='form-check form-check-inline'
    >
      <input
        className='form-check-input'
        type={type}
        name={name}
        id={idAndFor}
        value={children}
        readOnly={true}
      />
      <label
        className='form-check-label'
        htmlFor={idAndFor}
      >
        {children}
      </label>
    </div>
  );
};

export default FormClickInput;
