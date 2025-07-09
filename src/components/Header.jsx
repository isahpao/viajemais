import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import BotaoHeader from "./BotaoHeader";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "Galeria", path: "/galeria" },
    { title: "Contato", path: "/contato" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: "linear-gradient(to right, #66BDB5, #4a7c80)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontFamily: "'Montserrat', sans-serif",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}>

            ViajeMais
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                aria-label="menu">

                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}>

                <Box
                  sx={{
                    width: 200,
                    height: "100vh",
                    bgcolor: "#66BDB5",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                  onKeyDown={() => setDrawerOpen(false)}>

                  <List>
                    {navLinks.map(({ title, path }) => (
                      <ListItem button key={title} component={Link} to={path}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            navLinks.map(({ title, path }) => (
              <BotaoHeader key={title} to={path}>
                {title}
              </BotaoHeader>
            ))
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
