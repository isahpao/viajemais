import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, Box } from "@mui/material";
import TituloPrincipal from "../../components/TituloPrincipal";
import Texto from "../../components/Texto";
import CardBlog from "../../components/CardBlog";
import BotaoCarregarMais from "../../components/BotaoCarregarMais";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const perPage = 8;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dev.to/api/articles?tag=travel&per_page=${perPage}&page=${page}`
      );
      const newPosts = response.data;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 15%, #93b6e5 35%, #093e9a 60%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>

      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          py: 4,
        }}>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.7)),
              url("/images/aviao.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "rigth",
            backgroundAttachment: "fixed",
            filter: "brightness(0.95)",

            zIndex: 0,
          }}/>

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Container maxWidth="false">
            <Box
              sx={{
                maxWidth: 1100,
                mx: "auto",
                mb: { xs: 5, md: 8 },
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderRadius: 3,
                boxShadow: 4,
                border: "1px solid rgba(0, 0, 0, 0.08)",
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
              }}>

              <Box sx={{ flex: 1 }}>
                <TituloPrincipal variant="h4" sx={{ mt: 2, color: "#fff" }}>
                  Uma jornada por culturas, destinos e experiências reais
                </TituloPrincipal>

                <Texto>
                  Explore uma seleção exclusiva de artigos sobre{" "}
                  <strong>viagens, culturas e aventuras pelo mundo</strong>,
                  integrados da plataforma Dev.to. Os conteúdos estão em inglês
                  e trazem relatos autênticos, dicas práticas e inspirações para
                  quem deseja explorar novos horizontes com mais confiança e
                  curiosidade.
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

              <Box
                component="img"
                src="/images/logos.jpg"
                alt="Mapa ilustrativo"
                sx={{
                  width: { xs: "100%", md: 250 },
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 2,
                  flexShrink: 0,
                }}/>

            </Box>

            <Grid container spacing={6} columns={{ xs: 12, lg: 12 }} p={2}>
              {posts.map((post, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <CardBlog post={post} />
                </Grid>
              ))}
            </Grid>

            <Box textAlign="center" my={4}>
              <BotaoCarregarMais
                onClick={() => setPage((prev) => prev + 1)}
                loading={loading}>
                  
                Carregar mais
              </BotaoCarregarMais>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
