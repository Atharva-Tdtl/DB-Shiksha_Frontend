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

const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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

  const coursesData = [
    {
      id: 1,
      title: "AI Foundations for Everyone",
      category: "AI for Everyone",
      role: "Beginner",
      description:
        "Understand AI basics, tools, and real-world applications without coding.",
      fullDescription:
        "This program provides a comprehensive entry point into the world of Artificial Intelligence. Participants will explore the history of AI, different types of machine learning, and how AI is currently reshaping various sectors like healthcare, finance, and entertainment. No prior technical background is required.",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
      level: "Beginner",
      duration: "4 Weeks",
      tools: ["ChatGPT", "Canva AI"],
      outcomes: ["Understand AI concepts", "Use AI tools daily"],
    },
    {
      id: 2,
      title: "AI Productivity Mastery",
      category: "AI for Everyone",
      role: "General Users",
      description:
        "Boost daily productivity using AI tools like ChatGPT and automation.",
      fullDescription:
        "Master the art of prompt engineering and workflow automation to reclaim hours of your day. This course focuses on practical applications of LLMs and integrated tools to streamline document creation, email management, and research, making you a more effective professional in the modern digital landscape.",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&auto=format&fit=crop",
      level: "Beginner",
      duration: "3 Weeks",
      tools: ["ChatGPT", "Notion AI"],
      outcomes: ["Automate tasks", "Improve efficiency"],
    },
    {
      id: 3,
      title: "No-Code AI Automation",
      category: "AI for Everyone",
      role: "Non-Tech Users",
      description:
        "Build AI workflows without coding using modern no-code tools.",
      fullDescription:
        "Empower yourself to build complex business systems without writing a single line of code. Learn to connect various AI services with operational tools through Make and Zapier, creating self-sustaining loops that handle repetitive tasks and data processing automatically.",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      level: "Intermediate",
      duration: "5 Weeks",
      tools: ["Zapier", "Make"],
      outcomes: ["Build automations", "Save time"],
    },
    {
      id: 4,
      title: "AI for Students: Smart Learning",
      category: "AI for Students",
      role: "Students",
      description: "Use AI tools for study, assignments, and research work.",
      fullDescription:
        "Transform your academic journey by leveraging AI for efficient note-taking, complex topic summarization, and personalized learning paths. This course teaches students how to use AI ethically to enhance critical thinking and deepen their understanding of academic subjects.",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop",
      level: "Beginner",
      duration: "3 Weeks",
      tools: ["ChatGPT", "Grammarly"],
      outcomes: ["Better study habits", "Faster learning"],
    },
    {
      id: 5,
      title: "AI for Coding Beginners",
      category: "AI for Students",
      role: "Tech Students",
      description: "Learn coding faster using AI assistants and tools.",
      fullDescription:
        "Accelerate your journey into software development by using AI as a 24/7 mentor. Learn to use GitHub Copilot and ChatGPT to explain complex code, debug errors instantly, and generate boilerplate structures, allowing you to focus on logic and system design rather than syntax.",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
      level: "Beginner",
      duration: "4 Weeks",
      tools: ["GitHub Copilot", "ChatGPT"],
      outcomes: ["Write better code", "Debug efficiently"],
    },
    {
      id: 6,
      title: "AI Career Starter Kit",
      category: "AI for Students",
      role: "Final Year Students",
      description: "Prepare for AI careers with projects and tools.",
      fullDescription:
        "Build a robust portfolio that stands out to recruiters in the AI space. This program guides you through the technical foundations of Python and machine learning while simultaneously teaching you how to position your skills effectively in the job market, from resume optimization to technical interviews.",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop",
      level: "Intermediate",
      duration: "6 Weeks",
      tools: ["Python", "TensorFlow"],
      outcomes: ["Build projects", "Get job-ready"],
    },
    {
      id: 7,
      title: "AI for Professionals",
      category: "AI for Professionals",
      role: "Working Professionals",
      description: "Leverage AI tools to enhance workplace productivity.",
      fullDescription:
        "Designed for the modern workforce, this course bridges the gap between traditional operations and AI-driven efficiency. Learn to integrate AI into your specific role, whether in HR, operations, or finance, to drive measurable results and stay ahead of the curve.",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      level: "Intermediate",
      duration: "4 Weeks",
      tools: ["ChatGPT", "Excel AI"],
      outcomes: ["Automate workflows", "Improve output"],
    },
    {
      id: 8,
      title: "AI for Marketing & Sales",
      category: "AI for Professionals",
      role: "Marketers",
      description: "Use AI for content creation, ads, and customer targeting.",
      fullDescription:
        "Revolutionize your marketing funnel with AI-driven personalization and content generation. Learn to use sophisticated tools to predict customer behavior, automate high-quality social media content, and optimize ad spend through precision targeting and data-driven insights.",
      price: 4499,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      level: "Intermediate",
      duration: "5 Weeks",
      tools: ["Jasper AI", "HubSpot AI"],
      outcomes: ["Better campaigns", "Higher conversions"],
    },
    {
      id: 9,
      title: "AI Workflow Automation",
      category: "AI for Professionals",
      role: "Managers",
      description: "Automate business processes using AI tools.",
      fullDescription:
        "Scale your business operations without increasing overhead. This advanced course dives deep into enterprise-level automation strategies, teaching you how to map out complex business processes and replace manual bottlenecks with intelligent, AI-powered system integrations.",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
      level: "Advanced",
      duration: "6 Weeks",
      tools: ["Zapier", "Power Automate"],
      outcomes: ["Reduce manual work", "Scale operations"],
    },
    {
      id: 10,
      title: "AI Strategy for Leaders",
      category: "AI for Business Leaders",
      role: "Executives",
      description: "Understand how to implement AI in business strategy.",
      fullDescription:
        "Navigate the complex landscape of AI adoption from a leadership perspective. This strategic program focuses on identifying high-ROI AI opportunities, managing the cultural shift within teams, and ensuring ethical and compliant AI implementation at scale.",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      level: "Advanced",
      duration: "4 Weeks",
      tools: ["AI Dashboards"],
      outcomes: ["Strategic decisions", "AI adoption"],
    },
    {
      id: 11,
      title: "AI in Business Transformation",
      category: "AI for Business Leaders",
      role: "Founders",
      description: "Drive innovation using AI across departments.",
      fullDescription:
        "Lead the charge in the AI revolution by transforming your entire business model. This comprehensive program covers everything from data infrastructure readiness to cross-departmental AI integration, helping you build a future-ready organization that thrives on intelligent automation.",
      price: 7999,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
      level: "Advanced",
      duration: "5 Weeks",
      tools: ["Data AI Tools"],
      outcomes: ["Business growth", "Automation strategy"],
    },
    {
      id: 12,
      title: "Advanced AI Engineering",
      category: "Advanced AI Programs",
      role: "Developers",
      description: "Deep dive into AI/ML, model building, and deployment.",
      fullDescription:
        "For those looking to build the next generation of AI products. This technical deep-dive covers transformer architectures, fine-tuning large language models, MLOps, and deploying scalable AI solutions to production environments using cutting-edge frameworks.",
      price: 9999,
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
      level: "Expert",
      duration: "8 Weeks",
      tools: ["Python", "PyTorch", "TensorFlow"],
      outcomes: ["Build AI models", "Deploy applications"],
    },
  ];

    const courses = [
      { title: 'AI for Business Leaders', price: '49,999', level: 'Intermediate', category: 'Corporate', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
      { title: 'Full Stack AI Developer', price: '89,999', level: 'Beginner to Pro', category: 'Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600' },
      { title: 'Generative AI Masterclass', price: '29,999', level: 'Advanced', category: 'Creative', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600' },
      { title: 'MLOps for Engineers', price: '59,999', level: 'Advanced', category: 'Development', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600' },
      { title: 'Python for AI Beginners', price: '19,999', level: 'Beginner', category: 'Basics', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600' },
      { title: 'Computer Vision Specialization', price: '69,999', level: 'Intermediate', category: 'Ai Specialization', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=600' },
    ];


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
