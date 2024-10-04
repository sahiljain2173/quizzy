
// src/components/FormField.jsx
import React from 'react';
import TextField from '@mui/material/TextField';

const FormField = ({ label, onChange, value, type = 'text', ...props }) => {
  return (
    <TextField
      label={label}
      onChange={onChange}
      value={value}
      type={type}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default FormField;
