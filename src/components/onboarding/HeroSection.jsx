import React from "react";
import {
  Box,
  Container,
  useTheme,
  keyframes,
} from "@mui/material";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const HeroSection = ({ onStartClick }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: isDark ? "#050505" : "#FFFFFF", // True deep black
        color: "text.primary",
        textAlign: "center",
      }}
    >
      {/* Premium Background Mesh */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Core Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            height: "80vw",
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
            filter: "blur(120px)",
            animation: `${pulse} 10s infinite ease-in-out`,
          }}
        />

        {/* Secondary Accents */}
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "40vw",
            height: "40vw",
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "40vw",
            height: "40vw",
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Noise Texture */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
            opacity: 0.03,
            zIndex: 1,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Text and buttons removed as per user request */}
      </Container>
    </Box>
  );
};

export default HeroSection;
