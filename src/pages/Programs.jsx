import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import SectionWrapper from "../components/SectionWrapper";
import CardCourse from "../components/CardCourse";
import Loader from "../components/Loader";
import ButtonPrimary from "../components/ButtonPrimary";
import EmptyState from "../components/EmptyState";
import { fetchCourses } from "../services/courseService";

const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [open, setOpen] = useState(false);

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await fetchCourses(setLoading, (data) => {
        const transformedData = data.map(course => ({
          ...course,
          image: course.thumbnail || "https://images.unsplash.com/photo-1485083233855-313b198c97e2?w=800&auto=format&fit=crop",
          category: course.title.toLowerCase().includes("student") ? "AI for Students" : 
                    course.title.toLowerCase().includes("professional") ? "AI for Professionals" : 
                    course.title.toLowerCase().includes("business") || course.title.toLowerCase().includes("leader") ? "AI for Business Leaders" : 
                    course.title.toLowerCase().includes("advanced") || course.title.toLowerCase().includes("expert") ? "Advanced AI Programs" : "AI for Everyone",
          role: course.title.toLowerCase().includes("student") ? "Students" : 
                course.title.toLowerCase().includes("professional") ? "Working Professionals" : 
                course.title.toLowerCase().includes("leader") ? "Executives" : "General Users",
          level: "Beginner",
          duration: "4 Weeks",
          tools: [],
          outcomes: ["Understand AI concepts", "Use AI tools daily"],
          fullDescription: course.description
        }));
        setCoursesData(transformedData);
      });
    };
    loadData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };





  const filteredCourses = coursesData.filter((course) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.role.toLowerCase().includes(query) ||
      course.tools.some((tool) => tool.toLowerCase().includes(query));

    if (tab === 1)
      return matchesSearch && course.category === "AI for Students";
    if (tab === 2)
      return matchesSearch && course.category === "AI for Professionals";
    if (tab === 3)
      return (
        matchesSearch &&
        (course.category === "AI for Business Leaders" ||
          course.category === "Advanced AI Programs")
      );

    return matchesSearch;
  });

  return (
    <SectionWrapper
      title="Our Programs"
      subtitle="Explore our wide range of industry-aligned AI courses and certifications."
    >
      <Box
        sx={{
          mb: 6,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Programs" />
          <Tab label="For Students" />
          <Tab label="For Working Professionals" />
          <Tab label="Corporate Training" />
        </Tabs>

        <TextField
          placeholder="Search courses, tools, or roles..."
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleClearSearch}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: "100%", md: 350 } }}
        />
      </Box>

      {loading ? (
        <Loader type="skeleton" count={6} />
      ) : filteredCourses.length > 0 ? (
        <Grid container spacing={4}>
          {filteredCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CardCourse {...course} onClick={() => handleOpenModal(course)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyState 
          message={`No programs found matching "${searchQuery}"`} 
        />
      )}

      {/* Course Details Modal */}
      <Dialog
        open={open}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        scroll="body"
        PaperProps={{
          sx: { borderRadius: 4, overflow: "hidden" },
        }}
      >
        <DialogTitle sx={{ p: 0, position: "relative" }}>
          <Box
            component="img"
            src={selectedCourse?.image}
            sx={{ width: "100%", height: 250, objectFit: "cover" }}
          />
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              bgcolor: "white",
              color: "black",
              "&:hover": { bgcolor: "#f1f1f1" },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <Stack direction="row" spacing={1} mb={2}>
            <Chip
              label={selectedCourse?.category}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<BarChartIcon size="small" />}
              label={selectedCourse?.level}
              size="small"
            />
            <Chip
              icon={<AccessTimeIcon size="small" />}
              label={selectedCourse?.duration}
              size="small"
            />
          </Stack>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            {selectedCourse?.title}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 1 }}>
            About this Program
          </Typography>

          <Typography
            variant="body1"
            sx={{ 
              fontSize: "1.1rem", 
              lineHeight: 1.6, 
              fontWeight: 600, 
              color: "primary.main",
              mb: 2 
            }}
          >
            {selectedCourse?.description}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            {selectedCourse?.fullDescription}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "text.primary", display: "inline" }}>
              Target Audience:{" "}
            </Typography>
            <Typography variant="body1" sx={{ display: "inline", color: "text.secondary" }}>
              {selectedCourse?.role}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                What you'll learn
              </Typography>
              <List sx={{ p: 0 }}>
                {selectedCourse?.outcomes.map((outcome, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={outcome} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Tools you'll master
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedCourse?.tools.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    sx={{ bgcolor: "rgba(0, 0, 0, 0.05)", fontWeight: 500 }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 5,
              p: 3,
              bgcolor: "#f8f9fa",
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="body2" color="text.secondary">
                Program Fee
              </Typography>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>
                ₹{selectedCourse?.price.toLocaleString()}
              </Typography>
            </Box>
            <ButtonPrimary sx={{ px: 6, py: 1.5, fontSize: "1.1rem" }}>
              Enroll Now
            </ButtonPrimary>
          </Box>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default Programs;
