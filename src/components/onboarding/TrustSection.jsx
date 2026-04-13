import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Rating,
  Stack,
  keyframes,
  useTheme,
} from "@mui/material";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Software Engineer",
    text: "DBSHIKSHA completely changed how I approach coding. The AI tools integration is a game-changer.",
    avatar: "AS",
  },
  {
    name: "Rahul Varma",
    role: "Marketing Manager",
    text: "The Generative AI course helped me automate 60% of my content creation workflow. Highly recommended!",
    avatar: "RV",
  },
  {
    name: "Sneha Kapur",
    role: "Data Analyst",
    text: "Clean curriculum and very practical lessons. I landed a senior role within 2 months of finishing the CAIP.",
    avatar: "SK",
  },
  {
    name: "Vikram Singh",
    role: "Business Owner",
    text: "The Leadership track gave me the confidence to implement AI across my entire operation. ROI is already visible.",
    avatar: "VS",
  },
  {
    name: "Ananya Iyer",
    role: "Final Year Student",
    text: "The best place to start if you are confused about AI. No-code tools taught here are incredibly powerful.",
    avatar: "AI",
  },
  {
    name: "Kushal Dave",
    role: "Product Manager",
    text: "MLOps Architect certification is the most comprehensive one I have found. Perfect for technical PMs.",
    avatar: "KD",
  },
  {
    name: "Priya Nair",
    role: "UX Designer",
    text: "Using AI for design is the future. This course showed me how to use tools like Adobe Firefly effectively.",
    avatar: "PN",
  },
  {
    name: "Arjun Reddy",
    role: "Tech Consultant",
    text: "Enterprise AI strategy insights were top-notch. Great value for the price.",
    avatar: "AR",
  },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-350px * 8 - 32px * 8)); }
`;

const TrustSection = () => {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <Box sx={{ py: 8 }}>
      <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
          Trusted by 10,000+ Learners
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={5} readOnly sx={{ color: "#D4AF37" }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            4.9/5 Average Rating
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* Gradient Fades for Professional Look */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: 50, md: 150 },
            height: "100%",
            background: `linear-gradient(to right, ${bgColor} 0%, transparent 100%)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 50, md: 150 },
            height: "100%",
            background: `linear-gradient(to left, ${bgColor} 0%, transparent 100%)`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            animation: `${scroll} 40s linear infinite`,
            "&:hover": {
              animationPlayState: "paused",
            },
            gap: 4,
            px: 2,
            py: 2,
          }}
        >
          {marqueeItems.map((t, index) => (
            <Paper
              key={index}
              sx={{
                p: 4,
                bgcolor: "background.paper",
                border: "1px solid rgba(212, 175, 55, 0.1)",
                width: "350px",
                flexShrink: 0,
                height: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.05)",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                "{t.text}"
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "#D4AF37",
                    width: 40,
                    height: 40,
                    fontSize: "0.9rem",
                  }}
                >
                  {t.avatar}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.role}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrustSection;
