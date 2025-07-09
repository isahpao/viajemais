import { Typography } from "@mui/material";

export default function TituloSecundario({
  children,
  variant = "h6",
  align = "center",
  sx = {},
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom
      sx={{
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(144, 144, 144, 0.7)",
        fontFamily: "'Montserrat', sans-serif",
        width: "90%",
        mx: "auto",
        mb: 4,
        ...sx,
      }}>
    
      {children}
    </Typography>
  );
}
