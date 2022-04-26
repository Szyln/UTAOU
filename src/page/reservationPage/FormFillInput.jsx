import React from 'react';
import { useState } from 'react';

const FormFillInput = ({
  nameAndIdAndFor,
  type,
  children,
  placeholder,
  label,
  options = null,
}) => {
  const [value, setValue] = useState('');
  const changeInputHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className='mb-4'>
      <label className='form-label mb-2' htmlFor={nameAndIdAndFor}>
        {label}
      </label>
      {type != 'select' ? (
        <input
          className='form-control'
          type={type}
          name={nameAndIdAndFor}
          id={nameAndIdAndFor}
          placeholder={placeholder}
          onChange={changeInputHandler}
        />
      ) : (
        <select
          name={nameAndIdAndFor}
          id={nameAndIdAndFor}
          className='form-select'
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormFillInput;
