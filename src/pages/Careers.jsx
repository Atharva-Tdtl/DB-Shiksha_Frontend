import React from 'react';
import { Box, Typography, Grid, Container, Paper, Stack, useTheme } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VerifiedIcon from '@mui/icons-material/Verified';
import useCountUp from '../hooks/useCountUp';

const StatItem = ({ label, targetValue, suffix = "", active }) => {
  const theme = useTheme();
  const count = useCountUp(targetValue, 2000, active);
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" sx={{ color: '#D4AF37', fontWeight: 800, mb: 1 }}>
        {count}{suffix}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.text.secondary,
          textTransform: 'uppercase', 
          letterSpacing: 1, 
          fontWeight: 600 
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const RoleCard = ({ title, type, location, description, onApply }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        bgcolor: theme.palette.background.paper,
        borderRadius: '8px',
        border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)'}`,
        borderLeft: '4px solid #D4AF37',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-10px)',
          borderColor: '#D4AF37',
          boxShadow: isDark ? '0 25px 60px rgba(0,0,0,0.6)' : '0 25px 50px rgba(212, 175, 55, 0.15)',
          '&::after': {
            opacity: 1,
          }
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, rgba(212,175,55,${isDark ? '0.05' : '0.03'}) 0%, transparent 100%)`,
          opacity: 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none'
        }
      }}
    >
      <Stack spacing={2.5} sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: theme.palette.text.primary, lineHeight: 1.2 }}>{title}</Typography>
          <Box sx={{ 
            bgcolor: 'rgba(212,175,55,0.1)', 
            color: '#D4AF37', 
            px: 1.5, 
            py: 0.5, 
            borderRadius: '4px', 
            fontSize: '0.7rem', 
            fontWeight: 800,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase' 
          }}>
            {type}
          </Box>
        </Box>
        <Typography variant="caption" sx={{ color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#D4AF37' }} /> {location}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
          {description}
        </Typography>
        <Box sx={{ pt: 1 }}>
          <ButtonPrimary 
            variant="outlined" 
            size="small" 
            sx={{ px: 4, py: 1, fontWeight: 700 }}
            onClick={onApply || (() => window.location.href = "mailto:career@bhavsarfoundation.org")}
          >
            Apply Now
          </ButtonPrimary>
        </Box>
      </Stack>
    </Paper>
  );
};

const ValueItem = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  return (
    <Stack spacing={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Icon sx={{ color: '#D4AF37', fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Stack>
  );
};

const Careers = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [isInView, setIsInView] = React.useState(false);
  const statsRef = React.useRef(null);
  const openingsRef = React.useRef(null);

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    const currentStatsRef = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (currentStatsRef) observer.observe(currentStatsRef);
    return () => {
      if (currentStatsRef) observer.unobserve(currentStatsRef);
    };
  }, []);

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 8, md: 10 }, 
          pb: { xs: 6, md: 8 },
          textAlign: 'center',
          background: `radial-gradient(circle at top, rgba(212,175,55,${isDark ? '0.1' : '0.06'}) 0%, ${theme.palette.background.default} 70%)`,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: '#D4AF37', fontWeight: 800, letterSpacing: 5, mb: 2, display: 'block' }}>
              JOIN THE BHASKAR LEGACY
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4.2rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
              Build a Career of <Box component="span" sx={{ color: '#D4AF37' }}>Purpose</Box> & <Box component="span" sx={{ color: '#D4AF37' }}>Impact.</Box>
            </Typography>
            <Typography variant="h6" sx={{ mb: 5, maxWidth: 850, mx: 'auto', fontWeight: 400, color: theme.palette.text.secondary, fontSize: '1.1rem' }}>
              Work at the heart of social transformation. Join Bhavsar Foundation to empower marginalized communities through education, skill development, and grassroots innovation.
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
              <ButtonPrimary size="large" onClick={scrollToOpenings} sx={{ py: 2, px: 6, fontWeight: 700 }}>View Openings</ButtonPrimary>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box ref={statsRef} sx={{ py: 6, borderY: `1px solid ${isDark ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.05)'}`, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}><StatItem targetValue={500} suffix="+" label="Team Members" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={22} suffix="" label="States Impacted" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={15} suffix="+" label="Years of Legacy" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={50} suffix="+" label="Regional Offices" active={isInView} /></Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Work With Us / Culture */}
      <SectionWrapper title="Why Join Bhavsar Foundation?" subtitle="We don't just offer jobs; we offer platforms for social engineering and personal growth.">
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" sx={{ width: '100%', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }} />
              <Box sx={{ position: 'absolute', top: -15, left: -15, p: 2, bgcolor: '#D4AF37', borderRadius: '8px', boxShadow: '0 10px 20px rgba(212,175,55,0.4)', zIndex: 10 }}>
                <PeopleIcon sx={{ color: '#000', fontSize: 32 }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ValueItem icon={EmojiObjectsIcon} title="Ownership" description="We encourage an entrepreneurial spirit. You own your projects and their social outcomes." />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueItem icon={VolunteerActivismIcon} title="Compassion" description="Every action we take is rooted in empathy for the marginalized and rural communities." />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueItem icon={VerifiedIcon} title="Integrity" description="Inheriting the trust of the Dainik Bhaskar Group, we maintain absolute transparency." />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueItem icon={WorkIcon} title="Excellence" description="We strive for best-in-class social impact, using data and innovation to drive results." />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>

      {/* Current Openings */}
      <Box ref={openingsRef}>
        <SectionWrapper bgcolor={theme.palette.background.paper} title="Our Talent Categories" subtitle="Explore your fit within our mission-driven ecosystem.">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="Vocational Trainer" 
                type="Full-time" 
                location="Regional Skill Centres" 
                description="Expertise in ITI trades or technical skills to train urban and rural youth for jobs." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for Vocational Trainer - DB Shiksha"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="Field Coordinator" 
                type="Full-time" 
                location="Rural Project Sites" 
                description="Managing on-ground implementation of education and water conservation projects." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for Field Coordinator - DB Shiksha"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="Curriculum Expert" 
                type="Remote/Hybrid" 
                location="Headquarters" 
                description="Designing pedagogical content for primary education and digital learning platforms." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for Curriculum Expert - DB Shiksha"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="Digital Tech Lead" 
                type="Full-time" 
                location="Pune / Bhopal" 
                description="Driving the technological infrastructure for DB Shiksha's online AI learning portal." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for Digital Tech Lead - DB Shiksha"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="CSR Manager" 
                type="Full-time" 
                location="Metro Cities" 
                description="Bridging corporate partnerships with our diverse range of social initiatives." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for CSR Manager - DB Shiksha"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <RoleCard 
                title="Community Liaison" 
                type="Contract" 
                location="Remote Villages" 
                description="Fostering deep relationships with local leaders to ensure project sustainability." 
                onApply={() => window.location.href = "mailto:career@bhavsarfoundation.org?subject=Application for Community Liaison - DB Shiksha"}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
      </Box>

      {/* Application Process */}
      <SectionWrapper title="Application Process" subtitle="Transparent steps to becoming a part of our legacy.">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[
              { step: "01", title: "Submit Application", desc: "Share your CV and impact story with our recruitment team via email." },
              { step: "02", title: "Cultural Fit Review", desc: "A discussion with our HR team to align your values with the Foundation's mission." },
              { step: "03", title: "Technical Evaluation", desc: "Demonstrating your expertise in your specific domain or field of work." },
              { step: "04", title: "Join the Mission", desc: "Formal offer and onboarding into a career that truly matters." }
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box sx={{ textAlign: 'center', position: 'relative' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      color: isDark ? 'rgba(212,175,55,0.08)' : 'rgba(212,175,55,0.12)', 
                      fontWeight: 900, 
                      mb: 0.5,
                      fontSize: '4.5rem'
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: theme.palette.text.primary, lineHeight: 1.3 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, maxWidth: 220, mx: 'auto', lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Final CTA */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: theme.palette.background.paper, borderTop: `1px solid ${isDark ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.15)'}` }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Typography variant="h2" sx={{ mb: 4, fontWeight: 900 }}>Ready to <Box component="span" sx={{ color: '#D4AF37' }}>Make a Difference?</Box></Typography>
            <Typography variant="h6" sx={{ mb: 6, maxWidth: 750, mx: 'auto', color: theme.palette.text.secondary }}>
              If you are passionate about education, rural development, and creating long-term social value, we want to hear from you.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ px: 2 }}>
              <ButtonPrimary 
                size="large" 
                sx={{ py: 2.5, px: 8, fontSize: '1.2rem', boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)' }}
                onClick={() => window.location.href = "mailto:career@bhavsarfoundation.org"}
              >
                Email Your CV
              </ButtonPrimary>
              <ButtonPrimary 
                variant="outlined" 
                size="large" 
                sx={{ py: 2.5, px: 8, fontSize: '1.2rem', color: theme.palette.text.primary, borderColor: 'rgba(212,175,55,0.5)' }}
                onClick={() => window.location.href = "tel:+917554730000"}
              >
                Contact HR
              </ButtonPrimary>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Careers;
