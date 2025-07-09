import { Typography } from "@mui/material";

export default function TituloPrincipal({
  children,
  variant = "h3",
  align = "center",
  sx = {},
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom
      sx={{
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: 1.6,
        mb: 2,
        textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        ...sx,
      }}>
        
      {children}
    </Typography>
  );
}
