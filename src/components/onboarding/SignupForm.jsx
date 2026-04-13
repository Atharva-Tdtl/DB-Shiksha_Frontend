
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2";
import {
  registerUser,
  requestOtp,
  verifyOtp,
} from "../../services/authService";

import React, { useState } from 'react';
import { 
  Box, TextField, Button, Typography, Grid, MenuItem, 
  CircularProgress, InputAdornment, IconButton 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { registerUser } from '../../services/authService';


const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    gender: "M",
    education: "",
    other_education: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpTimer, setOtpTimer] = useState(600);

  useEffect(() => {
    let interval = null;
    if (otpModalOpen && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpModalOpen, otpTimer]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleResendOtp = async () => {
    try {
      await requestOtp({ email: formData.email });
      setOtpTimer(600);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "OTP Resent Successfully",
        showConfirmButton: false,
        timer: 3000,
        background: "#1A1A1A",
        color: "#D4AF37",
      });
    } catch (err) {}
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.full_name) tempErrors.full_name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Enter a valid 10-digit number";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.education)
      tempErrors.education = "Education status is required";
    if (formData.education === "other" && !formData.other_education)
      tempErrors.other_education = "Please specify your education";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password !== formData.password2)
      tempErrors.password2 = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];

    if (value.length > 1) {
      const pasted = value.slice(0, 6).split("");
      pasted.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtp(newOtp);
      const nextFocus = Math.min(index + pasted.length, 5);
      const nextInput = document.getElementById(`otp-input-${nextFocus}`);
      if (nextInput) nextInput.focus();
      if (newOtp.join("").length === 6) checkAndVerifyOtp(newOtp);
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    if (newOtp.join("").length === 6) checkAndVerifyOtp(newOtp);
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const checkAndVerifyOtp = async (currentOtp) => {
    const code = currentOtp.join("");
    if (code.length === 6) {
      setOtpVerifying(true);
      try {
        const response = await verifyOtp({
          email: formData.email,
          otp_type: "email",
          code,
        });
        console.log("[DEBUG] OTP Verification Response:", response);
        const authToken =
          response.token ||
          response.key ||
          response.data?.token ||
          response.data?.key;
        if (authToken) {
          localStorage.setItem("authToken", authToken);
        }
        setOtpModalOpen(false);
        Swal.fire({
          title: "Verification Successful! 🚀",
          text: "Loading your recommended courses...",
          timer: 2000,
          timerProgressBar: true,
          background: "#1A1A1A",
          color: "#FFFFFF",
          showConfirmButton: false,
          willClose: () => {
            navigate("/select-course", { state: { formData } });
          },
        });
      } catch (err) {
        const errorMsg =
          err.response?.data?.message || "Invalid OTP. Please try again.";
        Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: errorMsg,
          background: "#1A1A1A",
          color: "#FFFFFF",
          confirmButtonColor: "#D4AF37",
        });
        setOtp(["", "", "", "", "", ""]);
        document.getElementById("otp-input-0")?.focus();
      } finally {
        setOtpVerifying(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await registerUser(formData, setLoading);
      // Registration successful! Backend has sent OTP. Open Modal now.
      setOtpTimer(600);
      setOtpModalOpen(true);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errorMsg,
        background: "#1A1A1A",
        color: "#FFFFFF",
        confirmButtonColor: "#D4AF37",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 3, md: 5 },
        bgcolor: "background.paper",
        borderRadius: "16px",
        border: "1px solid rgba(212, 175, 55, 0.2)",
        maxWidth: "800px",
        mx: "auto",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 1, fontWeight: 800, textAlign: "center", color: "#D4AF37" }}
      >
        Complete Your Registration
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: "center", color: "text.secondary" }}
      >
        Join the elite community of AI-driven professionals
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            error={!!errors.full_name}
            helperText={errors.full_name}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
            <MenuItem value="O">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            error={!!errors.education}
            helperText={errors.education}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          >
            <MenuItem value="below_10">Below 10th</MenuItem>
            <MenuItem value="10th">10th Pass</MenuItem>
            <MenuItem value="12th">12th Pass</MenuItem>
            <MenuItem value="graduate">Graduate</MenuItem>
            <MenuItem value="postgraduate">Post Graduate</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Grid>
        {formData.education === "other" && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Please specify your education"
              name="other_education"
              value={formData.other_education}
              onChange={handleChange}
              error={!!errors.other_education}
              helperText={errors.other_education}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Full Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Create Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Confirm Password"
            name="password2"
            type={showPassword ? "text" : "password"}
            value={formData.password2}
            onChange={handleChange}
            error={!!errors.password2}
            helperText={errors.password2}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              py: 2,
              fontSize: "1.2rem",
              fontWeight: 800,
              borderRadius: "8px",
              background: "linear-gradient(45deg, #D4AF37 30%, #F5D76E 90%)",
              color: "#000",
              mt: 2,
              "&:hover": {
                background: "linear-gradient(45deg, #F5D76E 30%, #D4AF37 90%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={28} sx={{ color: "#000" }} />
            ) : (
              "Register Now"
            )}
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={otpModalOpen}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            background: "#1A1A1A",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "16px",
            color: "#fff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "#D4AF37",
            fontWeight: "bold",
            fontSize: "1.5rem",
            pt: 4,
          }}
        >
          Verify Your Email
        </DialogTitle>
        <DialogContent sx={{ pb: 4, px: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "#B3B3B3", mb: 3, textAlign: "center" }}
          >
            We've sent a 6-digit OTP to <br />
            <b style={{ color: "#fff" }}>{formData.email}</b>
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                inputProps={{
                  style: {
                    textAlign: "center",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    padding: "12px 0",
                    color: "#fff",
                  },
                }}
                sx={{
                  width: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" },
                    "&:hover fieldset": {
                      borderColor: "rgba(212, 175, 55, 0.6)",
                    },
                    "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                  },
                }}
              />
            ))}
          </Stack>

          {otpVerifying && (
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 1 }}
            >
              <CircularProgress size={28} sx={{ color: "#D4AF37" }} />
            </Box>
          )}

          <Box sx={{ textAlign: "center", mb: 2 }}>
            {otpTimer > 0 ? (
              <Typography variant="body2" sx={{ color: "#B3B3B3" }}>
                Resend OTP in{" "}
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  {formatTime(otpTimer)}
                </span>
              </Typography>
            ) : (
              <Button
                onClick={handleResendOtp}
                sx={{
                  color: "#D4AF37",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Resend OTP
              </Button>
            )}
          </Box>

          <Button
            fullWidth
            sx={{
              mt: 2,
              color: "#D4AF37",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(212, 175, 55, 0.1)" },
            }}
            onClick={() => setOtpModalOpen(false)}
            disabled={otpVerifying}
          >
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SignupForm;
