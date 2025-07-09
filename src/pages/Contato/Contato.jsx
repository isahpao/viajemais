import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Typography,
  Alert,
} from "@mui/material";
import TituloPrincipal from "../../components/TituloPrincipal";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Formulário enviado:", form);
    setOpen(true);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #66BDB5, #4a7c80)",
        py: { xs: 6, md: 8 }
      }}>

      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
          p: { xs: 3, md: 5 },
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: 3,
          boxShadow: 4,
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}>

        <TituloPrincipal variant="h4" sx={{ mt: 2, color: '#fff' }}>
          Gostou? Fale com a gente!
        </TituloPrincipal>

        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={3}>

          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            variant="outlined"
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}/>

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            variant="outlined"
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}/>

          <TextField
            fullWidth
            label="Mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            multiline
            rows={5}
            variant="outlined"
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}/>


          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(to right, #66BDB5, #4a7c80)",
              "&:hover": { backgroundColor: "#579e97" },
              width: "fit-content",
              alignSelf: "center",
              px: 4,
            }}>
              
            Enviar
          </Button>
        </Box>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Mensagem enviada com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
