import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick, children, ...props }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;

make this more better than you can
