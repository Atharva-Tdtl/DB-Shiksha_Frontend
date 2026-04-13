import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Container, Paper, Stack, Chip, Card, CardContent, CardMedia, 
  useTheme, TextField, Button, Dialog, DialogTitle, DialogContent, IconButton, Divider,
  Fade, Zoom
} from '@mui/material';
import { jsPDF } from "jspdf";
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const categories = ["All Projects", "Skill Development", "Water Conservation", "Rural Development", "Education"];

// --- Logic for Real PDF Generation ---
const generateProjectReportPDF = (projects) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 20;

  // Header Branding
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(212, 175, 55); // Gold color
  doc.text("BHAVSAR FOUNDATION", pageWidth / 2, yPos, { align: "center" });
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setTextColor(100);
  doc.text("Official Project Impact Report - 2024", pageWidth / 2, yPos, { align: "center" });

  yPos += 15;
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, pageWidth - 20, yPos);

  yPos += 15;

  projects.forEach((project, index) => {
    // Check for page overflow
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    // Project title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.text(`${index + 1}. ${project.title.toUpperCase()}`, 20, yPos);

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(212, 175, 55);
    doc.text(`Category: ${project.category} | Status: ${project.projectStatus}`, 20, yPos);

    yPos += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(60);
    
    // Wrap description text
    const splitDesc = doc.splitTextToSize(project.fullDescription, pageWidth - 40);
    doc.text(splitDesc, 20, yPos);
    
    yPos += (splitDesc.length * 6) + 5;

    // Metric Summary
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text("KEY IMPACT METRICS:", 20, yPos);
    
    yPos += 6;
    doc.setFont("helvetica", "normal");
    project.metrics.forEach(metric => {
      doc.text(`• ${metric.label}: ${metric.value}`, 25, yPos);
      yPos += 6;
    });

    yPos += 10;
    doc.setDrawColor(230);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 15;
  });

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.text(`Empowering through Action | www.dbshiksha.com | Page ${i} of ${pageCount}`, pageWidth / 2, 285, { align: "center" });
  }

  doc.save("Bhavsar_Foundation_Project_Reports.pdf");
};

// --- Inquiry Modal Component ---
const InquiryModal = ({ open, onClose, purpose, projectTitle, isDownload = false, projects = [] }) => {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isDownload) {
      setTimeout(() => {
        generateProjectReportPDF(projects);
      }, 500);
    }
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          bgcolor: theme.palette.background.paper,
          borderRadius: '16px',
          p: 2
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {submitted ? "Processing Request" : "Project Inquiry"}
        </Typography>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Zoom in={true} timeout={600}>
              <MarkEmailReadIcon sx={{ fontSize: 80, color: '#D4AF37', mb: 2 }} />
            </Zoom>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {isDownload ? "Generating PDF..." : "Success!"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isDownload 
                ? "Your custom project report is being generated and will download automatically." 
                : `Your interest in ${projectTitle || purpose} has been recorded. Our team will contact you shortly.`}
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
              {isDownload 
                ? "Confirm your details to generate the comprehensive Project Impact Report PDF."
                : `Interested in ${projectTitle || purpose}? Please fill out the form below and we will get back to you.`}
            </Typography>
            <Stack spacing={2.5}>
              <TextField 
                required 
                fullWidth 
                label="Full Name" 
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#D4AF37' } } }}
              />
              <TextField 
                required 
                fullWidth 
                label="Professional Email" 
                type="email" 
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#D4AF37' } } }}
              />
              {!isDownload && (
                <>
                  <TextField 
                    fullWidth 
                    label="Organization (Optional)" 
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#D4AF37' } } }}
                  />
                  <TextField 
                    required 
                    fullWidth 
                    multiline 
                    rows={4} 
                    label="Message / Proposal Brief" 
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#D4AF37' } } }}
                  />
                </>
              )}
              <ButtonPrimary type="submit" fullWidth sx={{ py: 1.5, fontSize: '1rem' }}>
                {isDownload ? "Generate & Download Report" : "Submit Proposal"}
              </ButtonPrimary>
            </Stack>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

const ProjectModal = ({ open, onClose, project, onPartnerClick }) => {
  const theme = useTheme();
  if (!project) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      TransitionComponent={Zoom}
      PaperProps={{
        sx: {
          bgcolor: theme.palette.background.paper,
          backgroundImage: 'none',
          borderRadius: '16px',
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.1)'}`,
        }
      }}
    >
      <DialogTitle sx={{ p: 4, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Chip label={project.category} size="small" sx={{ mb: 1, bgcolor: '#D4AF37', color: 'black', fontWeight: 800 }} />
          <Typography variant="h4" sx={{ fontWeight: 900 }}>{project.title}</Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: theme.palette.text.secondary }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ mx: 4, borderColor: 'rgba(212, 175, 55, 0.1)' }} />
      <DialogContent sx={{ p: 4, pt: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#D4AF37' }}>Project Overview</Typography>
            <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.primary, lineHeight: 1.8 }}>
              {project.fullDescription}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.text.secondary }}>
                    <PublicIcon sx={{ fontSize: '1.2rem', color: '#D4AF37' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{project.locationInfo || "Pan India"}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.text.secondary }}>
                    <GroupsIcon sx={{ fontSize: '1.2rem', color: '#D4AF37' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Impact: {project.metrics[0].value}</Typography>
                </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 3, bgcolor: 'rgba(212, 175, 55, 0.05)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AnalyticsIcon sx={{ color: '#D4AF37' }} /> Impact Metrics
              </Typography>
              <Stack spacing={2.5}>
                {project.metrics.map((metric, idx) => (
                  <Box key={idx}>
                    <Typography variant="caption" sx={{ color: '#D4AF37', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>{metric.label}</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>{metric.value}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            <ButtonPrimary 
              fullWidth 
              sx={{ mt: 3, py: 1.5 }}
              onClick={() => onPartnerClick(project.title)}
            >
              Partner on this Project
            </ButtonPrimary>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.paper,
        borderRadius: '12px',
        border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)'}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
          transform: 'translateY(-10px)',
          borderColor: '#D4AF37',
          boxShadow: isDark ? '0 25px 60px rgba(0,0,0,0.6)' : '0 25px 50px rgba(212, 175, 55, 0.15)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={project.image}
          alt={project.title}
          sx={{ filter: isDark ? 'brightness(0.8)' : 'none' }}
        />
        <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 12, left: 12 }}>
          <Chip label={project.category} size="small" sx={{ bgcolor: '#D4AF37', color: 'black', fontWeight: 800, fontSize: '0.65rem' }} />
          <Chip label={project.projectStatus} size="small" sx={{ bgcolor: 'rgba(0,0,0,0.6)', color: 'white', backdropFilter: 'blur(4px)', fontWeight: 700, fontSize: '0.6rem', border: '1px solid rgba(255,255,255,0.2)' }} />
        </Stack>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3.5 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>{project.title}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 4, lineHeight: 1.8 }}>{project.excerpt}</Typography>
        <Button 
          variant="text" 
          onClick={() => onViewDetails(project)}
          endIcon={<ArrowForwardIcon />} 
          sx={{ color: '#D4AF37', fontWeight: 800, p: 0, '&:hover': { bgcolor: 'transparent', letterSpacing: 1, transition: '0.3s' } }}
        >
          View Project Details
        </Button>
      </CardContent>
    </Card>
  );
};

const Blog = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openInquiryModal, setOpenInquiryModal] = useState(false);
  const [inquiryContext, setInquiryContext] = useState({ purpose: "", projectTitle: "", isDownload: false });

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
    setOpenDetailModal(true);
  };

  const handleOpenInquiry = (purpose, projectTitle = "", isDownload = false) => {
    setInquiryContext({ purpose, projectTitle, isDownload });
    setOpenInquiryModal(true);
    if (openDetailModal) setOpenDetailModal(false); 
  };

  const projects = [
    {
      id: 1,
      category: "Water Conservation",
      title: "Project Jal Satyagrah",
      excerpt: "A nationwide mission in 22 states focused on reviving village ponds and implementing roof rainwater harvesting structures.",
      fullDescription: "Launched to combat the growing water crisis in rural India, Project Jal Satyagrah focuses on the scientific restoration of traditional water bodies. We employ de-silting techniques, community-led management, and the installation of roof-top rainwater harvesting units to ensure consistent water availability for agriculture and domestic use.",
      metrics: [
        { label: "Ponds Restored", value: "200+" },
        { label: "Water Units Installed", value: "1500+" },
        { label: "States Impacted", value: "22 States" }
      ],
      locationInfo: "MP, Chhattisgarh, Rajasthan",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      projectStatus: "Ongoing"
    },
    {
      id: 2,
      category: "Skill Development",
      title: "Vocational Training Hubs",
      excerpt: "State-of-the-art training centres designed to provide job-oriented vocational skills to urban and rural youth.",
      fullDescription: "Our Vocational Training Hubs serve as dedicated centres of excellence for Skill Development. From ICT and electronics to hospitality and apparel design, we provide industry-vetted training modules that conclude with placement support, ensuring our students transition successfully into the workforce.",
      metrics: [
        { label: "Graduates", value: "2.1 Lakh+" },
        { label: "Placement Rate", value: "68%" },
        { label: "Trade Options", value: "15+ Fields" }
      ],
      locationInfo: "Pan-India Urban/Rural Hubs",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      projectStatus: "Ongoing"
    },
    {
      id: 3,
      category: "Rural Development",
      title: "Tribal Bamboo Craft Cluster",
      excerpt: "Empowering tribal artisans in MP and CG by organizing them into production clusters for sustainable livelihoods.",
      fullDescription: "This livelihood-centric project organizes tribal artisans into efficient production clusters. We provide training in modern bamboo craft designs, tool-kits, and market linkage support, helping artisans increase their monthly income while preserving traditional craftsmanship.",
      metrics: [
        { label: "Artisans Supported", value: "5,500+" },
        { label: "Income Increase", value: "40% Avg." },
        { label: "Clusters Active", value: "12 Sites" }
      ],
      locationInfo: "Tribal Belts (MP & CG)",
      image: "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?auto=format&fit=crop&q=80&w=800",
      projectStatus: "Completed"
    },
    {
      id: 4,
      category: "Education",
      title: "Jan Shikshan Sansthan (JSS)",
      excerpt: "Providing vocational education and skill training to marginalized rural youth, fostering self-reliance.",
      fullDescription: "Under the JSS initiative, we bring vocational education directly to the doorstep of the marginalized rural population. The focus is on women, school dropouts, and youth from underprivileged backgrounds, providing them with the means to start small-scale local enterprises.",
      metrics: [
        { label: "Women Empowered", value: "60,000+" },
        { label: "Local Businesses", value: "850+" },
        { label: "Courses Offered", value: "20+ Trades" }
      ],
      locationInfo: "Regional Rural Districts",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      projectStatus: "Active"
    },
    {
      id: 5,
      category: "Education",
      title: "Digital Literacy Campaign",
      excerpt: "A mission to bring digital education to remote village schools through mobile learning labs and innovative content.",
      fullDescription: "Our Digital Literacy Campaign utilizes 'Mobile Computer Labs' to reach students in the most geographically remote regions. Equipped with tablets, internet access, and interactive learning software, these labs bridge the digital divide and prepare rural students for a tech-driven future.",
      metrics: [
        { label: "Schools Covered", value: "350+" },
        { label: "Mobile Units", value: "25 Labs" },
        { label: "Students Reached", value: "45,000+" }
      ],
      locationInfo: "Aspirational Districts",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      projectStatus: "New Launch"
    },
    {
      id: 6,
      category: "Education",
      title: "Model School Adoption",
      excerpt: "Transforming government primary schools into 'Model Schools' by improving infrastructure and pedagogy.",
      fullDescription: "By adopting government primary schools, we take direct responsibility for their holistic improvement. This includes renovating classrooms, installing clean sanitation units, setting up drinking water facilities, and training teachers in modern pedagogical methods.",
      metrics: [
        { label: "Schools Adopted", value: "85+" },
        { label: "Improved Sanitation", value: "100%" },
        { label: "Pedagogy Impact", value: "30% Learning Gain" }
      ],
      locationInfo: "Industrial Clusters",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      projectStatus: "Active"
    }
  ];

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProject = projects[0];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 8, md: 10 }, 
          pb: { xs: 5, md: 7 },
          textAlign: 'center',
          background: `radial-gradient(circle at top, rgba(212,175,55,${isDark ? '0.1' : '0.06'}) 0%, ${theme.palette.background.default} 70%)`,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: '#D4AF37', fontWeight: 800, letterSpacing: 5, mb: 2, display: 'block' }}>
              DRIVING NATIONAL CHANGE
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4.2rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
              Our Impact <Box component="span" sx={{ color: '#D4AF37' }}>Projects</Box> & Portfolio.
            </Typography>
            <Typography variant="h6" sx={{ mb: 5, maxWidth: 800, mx: 'auto', color: theme.palette.text.secondary, fontWeight: 400 }}>
              Explore the core development projects initiated by Bhavsar Foundation to foster sustainable growth across India.
            </Typography>
            
            <Stack direction="row" spacing={1.5} justifyContent="center" flexWrap="wrap" gap={1.5}>
              {categories.map((cat, idx) => (
                <Chip 
                  key={idx} 
                  label={cat} 
                  variant={activeCategory === cat ? "filled" : "outlined"}
                  onClick={() => setActiveCategory(cat)}
                  sx={{ 
                    height: 40,
                    px: 1,
                    bgcolor: activeCategory === cat ? '#D4AF37' : 'transparent',
                    color: activeCategory === cat ? 'black' : theme.palette.text.primary,
                    borderColor: activeCategory === cat ? '#D4AF37' : 'rgba(212, 175, 55, 0.4)',
                    fontWeight: 700,
                    transition: '0.3s',
                    '&:hover': { bgcolor: activeCategory === cat ? '#B8962F' : 'rgba(212,175,55,0.1)' }
                  }} 
                />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Featured Project */}
      <Container maxWidth="xl" sx={{ mb: 6, px: { xs: 2, md: 4 } }}>
        <Paper 
          elevation={0}
          sx={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.15)'}`,
            bgcolor: theme.palette.background.paper,
            boxShadow: isDark ? '0 30px 60px rgba(0,0,0,0.4)' : '0 30px 60px rgba(212,175,55,0.08)'
          }}
        >
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box component="img" src={featuredProject.image} sx={{ width: '100%', height: '100%', minHeight: 450, objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ p: { xs: 4, md: 8 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Chip label="FLAGSHIP PROJECT" size="small" sx={{ bgcolor: '#D4AF37', color: 'black', fontWeight: 800 }} />
                    <Chip label={featuredProject.metrics[2].value} size="small" variant="outlined" sx={{ color: '#D4AF37', borderColor: '#D4AF37', fontWeight: 700 }} />
                </Stack>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.2 }}>
                  {featuredProject.title}: Reviving India's Water.
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4, lineHeight: 1.9, fontSize: '1.1rem' }}>
                   {featuredProject.fullDescription.substring(0, 180)}...
                </Typography>
                <ButtonPrimary 
                    size="large" 
                    startIcon={<AssignmentIcon />} 
                    sx={{ py: 2, px: 6, alignSelf: 'flex-start' }}
                    onClick={() => handleOpenDetail(featuredProject)}
                >
                    View Project Details
                </ButtonPrimary>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Project Grid */}
      <SectionWrapper title={activeCategory} subtitle="A deep dive into the tangible results of our mission-driven developmental work." py={8}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Grid container spacing={5}>
            {filteredProjects.map((proj, idx) => (
              <Grid item xs={12} md={6} lg={4} key={proj.id}>
                <ProjectCard project={proj} onViewDetails={handleOpenDetail} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Footer CTA */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.default, borderTop: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.05)'}` }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: 850, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>Partner in Our <Box component="span" sx={{ color: '#D4AF37' }}>Vision.</Box></Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 6, fontSize: '1.2rem', lineHeight: 1.8 }}>
              If you represent an organization or government body interested in collaborating on any of our projects, we would love to connect.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ px: 2 }}>
                <ButtonPrimary 
                    size="large" 
                    sx={{ py: 2.5, px: 8 }}
                    onClick={() => handleOpenInquiry("Collaboration Inquiry")}
                >
                    Collaborate With Us
                </ButtonPrimary>
                <ButtonPrimary 
                    variant="outlined" 
                    size="large" 
                    sx={{ py: 2.5, px: 8, borderColor: 'rgba(212,175,55,0.4)', color: theme.palette.text.primary }}
                    onClick={() => generateProjectReportPDF(projects)}
                >
                    Download Project Reports
                </ButtonPrimary>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* --- Modals --- */}
      
      {/* Project Detail Modal */}
      <ProjectModal 
        open={openDetailModal} 
        onClose={() => setOpenDetailModal(false)} 
        project={selectedProject} 
        onPartnerClick={(title) => handleOpenInquiry("Project Partnership", title)}
      />

      {/* Lead Inquiry Modal */}
      <InquiryModal 
        open={openInquiryModal} 
        onClose={() => setOpenInquiryModal(false)}
        purpose={inquiryContext.purpose}
        projectTitle={inquiryContext.projectTitle}
        isDownload={inquiryContext.isDownload}
        projects={projects}
      />
    </Box>
  );
};

export default Blog;
