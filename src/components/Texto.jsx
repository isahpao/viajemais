import { Typography } from "@mui/material";

export default function Texto({
  children,
  variant = "body1",
  align = "center",
  sx = {},
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom
      sx={{
        color: "#2e4644",
        fontSize: "1.1rem",
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: 1.8,
        fontWeight: 400,
        ...sx,
      }}>
        
      {children}
    </Typography>
  );
}
