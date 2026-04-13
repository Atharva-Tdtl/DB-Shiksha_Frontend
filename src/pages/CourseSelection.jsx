import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Button,
  Chip,
  Fade,
  useTheme,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import PaymentIcon from "@mui/icons-material/Payment";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchCourses, initiatePayment } from "../services/authService";

const CourseSelection = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const location = useLocation();
  const formData = useMemo(
    () => location.state?.formData || {},
    [location.state]
  );

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesData = await fetchCourses(formData);
        if (coursesData && coursesData.length > 0) {
          setCourses(coursesData);
        } else {
          throw new Error("No courses returned from backend");
        }
      } catch (error) {
        console.error("API failed, using static fallback courses", error);
        const fallbackCourses = [
          {
            id: 1,
            title: "AI basics",
            description:
              "In this comprehensive course, you will learn how to leverage artificial intelligence in your day-to-day life to maximize efficiency and automate repetitive tasks.",
            price: "1.00",
            thumbnail: "http://tdtlworld.com/media/courses/thumbnails/ai_image.jpg",
          },
          {
            id: 2,
            title: "Full Stack Web Development",
            description:
              "Master modern web development from frontend to backend. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB through hands-on projects.",
            price: "1999.00",
            thumbnail: null,
          },
          {
            id: 3,
            title: "Mastering Prompt Engineering",
            description:
              "Unlock the full potential of Large Language Models. Learn advanced techniques to create precise prompts for ChatGPT, Claude, and more.",
            price: "499.00",
            thumbnail: null,
          },
        ];
        setCourses(fallbackCourses);
      } finally {
        setCoursesLoading(false);
      }
    };

    loadCourses();
  }, [formData]);

  const fallbackImages = [
    "/images/ai_basics.png",
    "/images/fullstack.png",
    "/images/data_science.png",
    "/images/cybersecurity.png",
    "/images/cloud_computing.png",
  ];

  const getCourseImage = (course, index) => {
    if (course.thumbnail) return course.thumbnail;
    return fallbackImages[index % fallbackImages.length];
  };

  const handleCourseToggle = (courseId) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const isSelected = (courseId) => selectedCourses.includes(courseId);

  const totalPrice = selectedCourses.reduce((sum, id) => {
    const course = courses.find((c) => c.id === id);
    return sum + (course ? parseFloat(course.price) : 0);
  }, 0);

  const handlePayment = async () => {
    if (selectedCourses.length === 0) return;

    setPaymentLoading(true);
    try {
      for (const courseId of selectedCourses) {
        await initiatePayment({ course_id: courseId });
      }

      Swal.fire({
        icon: "success",
        title: "Payment Link Sent! 🎉",
        text: "Check your email for the Razorpay payment link to complete enrollment.",
        background: isDarkMode ? "#1A1A1A" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#0D0D0D",
        confirmButtonColor: "#D4AF37",
        confirmButtonText: "Fantastic!",
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Something went wrong with payment initiation.";
      Swal.fire({
        icon: "error",
        title: "Oh no!",
        text: errorMsg,
        background: isDarkMode ? "#1A1A1A" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#0D0D0D",
        confirmButtonColor: "#D4AF37",
      });
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: selectedCourses.length > 0 ? 15 : 8,
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0) 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Header section */}
        <Box sx={{ textAlign: "center", mb: 8, position: "relative", zIndex: 1 }}>
          <Fade in timeout={800}>
            <Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  bgcolor: isDarkMode ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0.05)",
                  border: "1px solid",
                  borderColor: "rgba(212, 175, 55, 0.3)",
                  borderRadius: "50px",
                  px: 2.5,
                  py: 1,
                  mb: 3,
                }}
              >
                <SchoolIcon sx={{ color: "#D4AF37", fontSize: 20 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#D4AF37",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Your Future Starts Here
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: "text.primary",
                  mb: 2,
                  fontSize: { xs: "2.2rem", md: "3.5rem" },
                  lineHeight: 1.1,
                }}
              >
                Choose Your <span style={{ color: "#D4AF37" }}>Learning Path</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Select the programs that align with your career goals. You can customize your learning journey by selecting multiple courses.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Content Section */}
        {coursesLoading ? (
          <Box sx={{ display: "flex", flexWrap: "column", alignItems: "center", justifyContent: "center", my: 12 }}>
            <CircularProgress sx={{ color: "#D4AF37", mb: 2 }} size={60} thickness={4} />
            <Typography variant="h6" color="text.secondary">Curating premium courses for you...</Typography>
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center" sx={{ position: "relative", zIndex: 1 }}>
            {Array.isArray(courses) &&
              courses.map((course, index) => (
                <Grid item xs={12} sm={6} lg={4} key={course.id}>
                  <Fade in timeout={600 + index * 200}>
                    <Card
                      onClick={() => handleCourseToggle(course.id)}
                      elevation={isSelected(course.id) ? 12 : 1}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        borderRadius: "24px",
                        cursor: "pointer",
                        overflow: "hidden",
                        bgcolor: "background.paper",
                        border: "2px solid",
                        borderColor: isSelected(course.id) ? "#D4AF37" : "transparent",
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        transform: isSelected(course.id) ? "scale(1.03)" : "none",
                        "&:hover": {
                          transform: isSelected(course.id) ? "scale(1.03)" : "translateY(-10px)",
                          boxShadow: "0 22px 40px rgba(0,0,0,0.12)",
                          borderColor: isSelected(course.id) ? "#D4AF37" : "rgba(212, 175, 55, 0.4)",
                        },
                      }}
                    >
                      {/* Course Image */}
                      <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          image={getCourseImage(course, index)}
                          alt={course.title}
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            transition: "transform 0.8s ease",
                            transform: isSelected(course.id) ? "scale(1.1)" : "scale(1)",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 15,
                            left: 15,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          <Chip
                            label="PRO"
                            size="small"
                            icon={<StarIcon style={{ color: "white", fontSize: 14 }} />}
                            sx={{
                              bgcolor: "#D4AF37",
                              color: "white",
                              fontWeight: 900,
                              borderRadius: "8px",
                            }}
                          />
                        </Box>

                        {isSelected(course.id) && (
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              bgcolor: "rgba(212, 175, 55, 0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                bgcolor: "#D4AF37",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)",
                              }}
                            >
                              <CheckCircleIcon sx={{ color: "white", fontSize: 40 }} />
                            </Box>
                          </Box>
                        )}
                      </Box>

                      {/* Card Body */}
                      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              color: "text.primary",
                              lineHeight: 1.2,
                              flexGrow: 1,
                            }}
                          >
                            {course.title}
                          </Typography>
                          <Box sx={{ ml: 2, textAlign: "right" }}>
                            <Typography variant="h6" sx={{ color: "#D4AF37", fontWeight: 900 }}>
                              ₹{parseFloat(course.price).toLocaleString("en-IN")}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 3,
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            height: "3.2rem",
                          }}
                        >
                          {course.description}
                        </Typography>

                        <Grid container spacing={1} sx={{ mb: 4 }}>
                          <Grid item xs={6}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <TrendingUpIcon sx={{ fontSize: 16, color: "#D4AF37" }} />
                              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Mastery Track</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <SchoolIcon sx={{ fontSize: 16, color: "#D4AF37" }} />
                              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Certification</Typography>
                            </Box>
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: "auto" }}>
                          <Button
                            fullWidth
                            variant={isSelected(course.id) ? "contained" : "outlined"}
                            color="primary"
                            sx={{
                              py: 1.5,
                              borderRadius: "15px",
                              fontWeight: 800,
                              fontSize: "1rem",
                              border: "2px solid",
                              borderColor: "#D4AF37",
                              bgcolor: isSelected(course.id) ? "#D4AF37" : "transparent",
                              color: isSelected(course.id) ? "white" : "#D4AF37",
                              "&:hover": {
                                border: "2px solid",
                                borderColor: "#D4AF37",
                                bgcolor: isSelected(course.id) ? "#B8860B" : "rgba(212, 175, 55, 0.08)",
                              },
                            }}
                          >
                            {isSelected(course.id) ? "DESELECT COURSE" : "SELECT THIS COURSE"}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>

      {/* Persistent Checkout Footer */}
      {selectedCourses.length > 0 && (
        <Fade in>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1100,
              p: { xs: 2, md: 3 },
              background: isDarkMode 
                ? "rgba(13, 13, 13, 0.85)" 
                : "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid",
              borderColor: "divider",
              boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 3,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 16, color: "#D4AF37" }} />
                    {selectedCourses.length} {selectedCourses.length === 1 ? "Program" : "Programs"} Selected
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary" }}>
                    Total: <span style={{ color: "#D4AF37" }}>₹{totalPrice.toLocaleString("en-IN")}</span>
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePayment}
                  disabled={paymentLoading}
                  startIcon={paymentLoading ? <CircularProgress size={24} color="inherit" /> : <PaymentIcon />}
                  sx={{
                    px: { xs: 4, md: 8 },
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    borderRadius: "18px",
                    background: "linear-gradient(45deg, #D4AF37 30%, #F5D76E 90%)",
                    color: "white",
                    boxShadow: "0 8px 30px rgba(212, 175, 55, 0.4)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)",
                    },
                  }}
                >
                  {paymentLoading ? "SUBMITTING..." : "PROCEED TO PAYMENT"}
                </Button>
              </Box>
            </Container>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default CourseSelection;

