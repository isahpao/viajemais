import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function CardBlog({ post }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(0,0,0,0.1)",
        justifyContent: "space-between",
        boxShadow: 3,
        borderRadius: 2,
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <Box
        sx={{
          height: "4px",
          background: "linear-gradient(to right, #66BDB5, #4a7c80)",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          textAlign="center"
          my={2}
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#1b2f2e" }}
        >
          {post.title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {post.description}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
          Publicado em: {new Date(post.published_at).toLocaleDateString()}
        </Typography>
        <Button
          size="small"
          variant="text"
          endIcon={<LaunchIcon />}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#fff',
            mt: 2,
            px: 4,
            py: 1.5,
            background: "linear-gradient(to right, #66BDB5, #4a7c80)",
          }}>

          Ler mais
        </Button>
      </Box>
    </Card>
  );
}
