import React, { useState } from "react";
import {
  Grid,
  Dialog,
  DialogContent,
  Box,
  Container,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TituloPrincipal from "../../components/TituloPrincipal";
import Texto from "../../components/Texto";
import CardImagemGaleria from "../../components/CardImagemGaleria";
import BotaoCarregarMais from "../../components/BotaoCarregarMais";

const imagens = [
  "/images/viagem-1.jpg",
  "/images/viagem-2.jpg",
  "/images/viagem-3.jpg",
  "/images/viagem-4.jpg",
  "/images/viagem-5.jpg",
  "/images/viagem-6.jpg",
  "/images/viagem-7.jpg",
  "/images/viagem-8.jpg",
  "/images/viagem-9.jpg",
  "/images/viagem-10.jpg",
  "/images/viagem-11.jpg",
  "/images/viagem-12.jpg",
  "/images/viagem-13.jpg",
  "/images/viagem-14.jpg",
  "/images/viagem-15.jpg",
  "/images/viagem-16.jpg",
  "/images/viagem-17.jpg",
  "/images/viagem-18.jpg",
];

export default function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(10);

  const carregarMais = () => {
    setQuantidadeVisivel((prev) => prev + 4);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
       background: "linear-gradient(to bottom, #66BDB5, #4a7c80)",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay, normal",
        py: 4,
      }}>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 1100,
              mx: "auto",
              mb: 6,
              px: 4,
              py: 5,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: 3,
              boxShadow: 4,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>

            <TituloPrincipal variant="h4" sx={{ mt: 2, color: '#fff' }}>
              Descubra paisagens incríveis, momentos marcantes e culturas
              fascinantes através da nossa galeria de imagens.
            </TituloPrincipal>

            <Texto>
              Cada fotografia é um convite para explorar o mundo com novos
              olhos, mergulhar em histórias reais e se inspirar para sua próxima
              aventura.
            </Texto>

            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(to right, #66BDB5, #4a7c80)",
                borderRadius: 2,
                mt: 3,
              }}/>
          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 4, px: 2 }}>
            {imagens.slice(0, quantidadeVisivel).map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardImagemGaleria
                  src={src}
                  onClick={() => setImagemSelecionada(src)}/>
              </Grid>
            ))}
          </Grid>

          {quantidadeVisivel < imagens.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <BotaoCarregarMais onClick={carregarMais}>
                Carregar mais
              </BotaoCarregarMais>
            </Box>
          )}
        </Container>
      </Box>

      <Dialog
  open={!!imagemSelecionada}
  onClose={() => setImagemSelecionada(null)}
  fullWidth
  maxWidth="xl">
  <DialogContent sx={{ position: "relative", p: 0 }}>

    <IconButton
      onClick={() => setImagemSelecionada(null)}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        zIndex: 2,
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.7)",
        },
      }}>
      <CloseIcon />
    </IconButton>

    <Box
      component="img"
      src={imagemSelecionada}
      alt="Zoom"
      sx={{
        objectFit: "cover",
        width: "100%",
        maxHeight: "90vh",
      }}/>
  </DialogContent>
</Dialog>
    </Box>
  );
}
