import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
  Grid,
} from "@mui/material";
import AIReadinessQuiz from "../components/AIReadinessQuiz";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TimerIcon from "@mui/icons-material/Timer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const QuizPage = ({ setIsQuizActive }) => {
  const [startTest, setStartTest] = useState(false);

  const handleStart = () => {
    setStartTest(true);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {!startTest ? (
          <Fade in={true} timeout={800}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                maxWidth: 800,
                mx: "auto",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  opacity: 0.1,
                  transform: "rotate(15deg)",
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 150, color: "#D4AF37" }} />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(45deg, #D4AF37 30%, #F4D03F 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Readiness Test
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
              >
                Assess your skills, discover your potential, and get a
                personalized course recommendation to kickstart or accelerate
                your AI journey.
              </Typography>

              <Grid container spacing={4} sx={{ textAlign: "left", mb: 6 }}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={3}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mt: 0.5 }}>
                        <AssignmentIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Comprehensive Assessment"
                        secondary="Covers AI Fundamentals, LLMs, Prompt Engineering, and Strategy"
                        primaryTypographyProps={{ fontWeight: 700 }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mt: 0.5 }}>
                        <TimerIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="5-10 Minutes"
                        secondary="A quick but accurate assessment of your AI knowledge"
                        primaryTypographyProps={{ fontWeight: 700 }}
                      />
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={3}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mt: 0.5 }}>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Instant Feedback"
                        secondary="Learn as you go with real-time answer verification"
                        primaryTypographyProps={{ fontWeight: 700 }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mt: 0.5 }}>
                        <AutoAwesomeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Personalized Path"
                        secondary="Get recommended courses based on your specific tier"
                        primaryTypographyProps={{ fontWeight: 700 }}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

              <Divider sx={{ mb: 6, borderColor: "rgba(212, 175, 55, 0.1)" }} />

              <Button
                variant="contained"
                size="large"
                onClick={handleStart}
                sx={{
                  px: 8,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
                  "&:hover": {
                    boxShadow: "0 6px 25px rgba(212, 175, 55, 0.4)",
                  },
                }}
              >
                Start Test Now
              </Button>
            </Paper>
          </Fade>
        ) : (
          <AIReadinessQuiz setIsQuizActive={setIsQuizActive} />
        )}
      </Container>
    </Box>
  );
};

export default QuizPage;
