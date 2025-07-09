import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function BotaoHome({
  children,
  to,
  onClick,
  type = "button",
  sx = {},
  ...props
}) {
  return (
    <Button
      variant="contained"
      component={RouterLink}
      to={to}
      type={type}
      onClick={onClick}
      sx={{
        fontFamily: "'Montserrat', sans-serif",
        width: "fit-content",
        alignSelf: "center",
        mt: 2,
        background: "linear-gradient(to right, #66BDB5, #4a7c80)",
        "&:hover": { backgroundColor: "#579e97" },
        ...sx,
      }}
      {...props}>
        
      {children}
    </Button>
  );
}
