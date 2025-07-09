import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BotaoHeader({ to, children, ...props }) {
  return (
    <Button
      sx={{ fontFamily: "'Montserrat', sans-serif" }}
      color="inherit"
      component={Link}
      to={to}
      {...props}>
        
      {children}
    </Button>
  );
}
