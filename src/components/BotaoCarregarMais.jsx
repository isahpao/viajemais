import { Button } from "@mui/material";

export default function BotaoCarregarMais({ onClick, loading, children }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={loading}
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: 2,
        background: "linear-gradient(to right, #66BDB5, #4a7c80)",
        "&:hover": {
          backgroundColor: "#579e97",
        },
      }}>
      {loading ? "Carregando..." : children}
    </Button>
  );
}
