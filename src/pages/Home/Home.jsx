import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TituloPrincipal from "../../components/TituloPrincipal";
import TituloSecundario from "../../components/TituloSecundario";
import BotaoHome from "../../components/BotaoHome";

export default function Home() {
  const imagens = [
    "/images/mar.jpg",
    "/images/janelinha.jpg",
    "/images/rj.jpg",
    "/images/agua.jpg",
    "/images/voar.jpg",
    "/images/guardachuvinhas.jpg",

  ];

  const [imagemAtual, setImagemAtual] = useState(() =>
  Math.floor(Math.random() * imagens.length)
);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((prev) => (prev + 1) % imagens.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 6,
      }}>

      {imagens.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Imagem ${index + 1}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 15%",
            filter: "brightness(0.75)",
            zIndex: 1,
            opacity: index === imagemAtual ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
      ))}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          textAlign: "center",
          color: "white",
          pb: 8,
        }}>

        <TituloPrincipal variant="h3" sx={{ mt: 8 }}>
          Explore o mundo com a ViajeMais
        </TituloPrincipal>

        <TituloSecundario>
          O mundo é como o mar: Quanto mais você mergulha, mais descobre
        </TituloSecundario>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            fontWeight: "600",
          }}>
          Descubra novos destinos, culturas e experiências incríveis
        </Typography>

        <BotaoHome to="/blog" sx={{ px: 4, py: 1.5 }}>
          Ir para o Blog de Viagens
        </BotaoHome>
      </Box>
    </Box>
  );
}
