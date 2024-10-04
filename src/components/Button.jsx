import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

// Forwarding ref for flexibility in handling DOM refs
const CustomButton = React.forwardRef(({
  onClick,
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  sx = {},
  ...props
}, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled || loading} // Disable button when loading
      sx={{
        position: 'relative', // Ensures loading spinner doesn't misplace content
        ...sx,
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress 
          size={24} // Adjust spinner size based on button size
          sx={{ color: 'white', position: 'absolute' }} 
        />
      ) : children}
    </Button>
  );
});

// Adding PropTypes for better type checking
CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool, // New prop to handle loading state
  sx: PropTypes.object, // For Material-UI's custom styling via sx
};

export default CustomButton;
