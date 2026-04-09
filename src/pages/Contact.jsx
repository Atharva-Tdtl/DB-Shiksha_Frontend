import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import ButtonPrimary from "../components/ButtonPrimary";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { showSuccess } from "../utils/swal";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccess(
      "Message Sent!",
      "Thank you for reaching out. We will get back to you soon.",
    );
  };

  return (
    <SectionWrapper
      title="Get In Touch"
      subtitle="Have questions about our AI programs? Our team is here to help you choose the right path."
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <IconButton
                sx={{ bgcolor: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
              >
                <EmailIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography color="text.secondary">
                  empower@tdtl.world
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <IconButton
                sx={{ bgcolor: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
              >
                <PhoneIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Typography color="text.secondary">+91 92255 84954</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                sx={{ bgcolor: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
              >
                <LocationOnIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Location
                </Typography>
                <Typography color="text.secondary">
                  Bavdhan,Pune, Maharashtra, India
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay updated with the latest in AI and our new program launches.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: { xs: 3, md: 5 } }}
          >
            <Typography variant="h5" sx={{ mb: 4 }}>
              Send us a Message
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  required
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Subject" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonPrimary type="submit" fullWidth size="large">
                  Send Message
                </ButtonPrimary>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Contact;
