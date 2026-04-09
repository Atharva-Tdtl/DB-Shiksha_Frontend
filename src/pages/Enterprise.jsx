import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const Enterprise = () => {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8, mt: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
            }}
          >
            AI Solutions for Enterprises & Government
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "text.secondary", mb: 4, maxWidth: "800px", mx: "auto" }}
          >
            Empowering organizations and public sectors with AI-driven
            transformation
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              px: 4,
              py: 1.5,
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Card 1: Corporate Training */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                borderRadius: "8px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(212, 175, 55, 0.2)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
                >
                  Corporate Training
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", mb: 3, fontSize: "1.1rem" }}
                >
                  Upskill your workforce with custom AI programs designed for
                  productivity and business growth.
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 2, mb: 4, "& li": { mb: 1.5 } }}
                >
                  <li>
                    <Typography>Custom AI programs</Typography>
                  </li>
                  <li>
                    <Typography>Industry use cases</Typography>
                  </li>
                  <li>
                    <Typography>Hands-on workshops</Typography>
                  </li>
                </Box>
                <Box sx={{ mt: "auto", textAlign: "left" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      px: 3,
                    }}
                  >
                    Request Proposal
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Government Initiatives */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                borderRadius: "8px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(212, 175, 55, 0.2)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
                >
                  Government Initiatives
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", mb: 3, fontSize: "1.1rem" }}
                >
                  Driving large-scale AI education and digital transformation
                  across public sectors.
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 2, mb: 4, "& li": { mb: 1.5 } }}
                >
                  <li>
                    <Typography>Rural AI education</Typography>
                  </li>
                  <li>
                    <Typography>Digital governance</Typography>
                  </li>
                  <li>
                    <Typography>Workforce upskilling</Typography>
                  </li>
                </Box>
                <Box sx={{ mt: "auto", textAlign: "left" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      px: 3,
                    }}
                  >
                    Partner With Us
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            bgcolor: "background.paper",
            py: 6,
            px: 2,
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Ready to transform with AI?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                px: 4,
                py: 1.5,
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                fontWeight: "bold",
                px: 4,
                py: 1.5,
              }}
            >
              Book Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Enterprise;
