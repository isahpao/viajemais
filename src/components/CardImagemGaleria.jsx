import { Box } from "@mui/material";

export default function CardImagemGaleria({ src, onClick }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={onClick}>

      <Box
        sx={{
          height: "4px",
          background: "linear-gradient(to right, #66BDB5, #4a7c80)",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}/>

      <Box
        component="img"
        src={src}
        alt="Imagem Galeria"
        sx={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          objectPosition: "center",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}/>
    </Box>
  );
}
