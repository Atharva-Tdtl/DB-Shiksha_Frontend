import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

const benefits = [
  {
    title: "Job-Ready AI Skills",
    icon: <CheckCircleOutlineIcon sx={{ color: "#D4AF37" }} />,
    desc: "Gain skills that are in high demand in the AI-driven economy.",
  },
  {
    title: "Real-World Projects",
    icon: <LightbulbIcon sx={{ color: "#D4AF37" }} />,
    desc: "Apply your learning to actual industry projects and build a portfolio.",
  },
  {
    title: "Certifications",
    icon: <CardMembershipIcon sx={{ color: "#D4AF37" }} />,
    desc: "Earn recognized certifications to validate your AI expertise.",
  },
  {
    title: "Career Growth",
    icon: <AutoGraphIcon sx={{ color: "#D4AF37" }} />,
    desc: "Unlock new career opportunities and salary advancements.",
  },
];

const Outcomes = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 6, fontWeight: 700 }}
      >
        What You'll Achieve
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                p: 4,
                bgcolor: "background.paper",
                border: "1px solid rgba(212, 175, 55, 0.1)",
                height: "100%",
                transition: "all 0.3s",
                "&:hover": { border: "1px solid #D4AF37" },
              }}
            >
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ mt: 0.5 }}>{benefit.icon}</Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.desc}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Outcomes;
