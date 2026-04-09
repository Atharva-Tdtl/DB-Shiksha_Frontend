import React from 'react';
import { Box, Typography, Grid, Container, Paper, Stack, Divider, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
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

const ValueCard = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        bgcolor: theme.palette.background.paper,
        borderRadius: '8px',
        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)'}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
          transform: 'translateY(-12px)',
          borderColor: '#D4AF37',
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 15px 40px rgba(212, 175, 55, 0.15)' 
            : '0 15px 40px rgba(212, 175, 55, 0.1)',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(212, 175, 55, 0.05) 100%)`,
        },
      }}
    >
      <Box sx={{ 
        width: 60, 
        height: 60, 
        borderRadius: '50%', 
        bgcolor: 'rgba(212, 175, 55, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 3 
      }}>
        <Icon sx={{ fontSize: 32, color: '#D4AF37' }} />
      </Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: theme.palette.text.primary }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ lineHeight: 1.8, color: theme.palette.text.secondary }}>
        {description}
      </Typography>
    </Paper>
  );
};

const TimelineItem = ({ year, title, description, isLast }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', gap: 4, mb: isLast ? 0 : 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ 
          width: 16, 
          height: 16, 
          borderRadius: '50%', 
          border: '3px solid #D4AF37', 
          bgcolor: theme.palette.background.default 
        }} />
        {!isLast && <Box sx={{ width: 2, flexGrow: 1, bgcolor: 'rgba(212, 175, 55, 0.2)', my: 1 }} />}
      </Box>
      <Box sx={{ pb: 4 }}>
        <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 800, mb: 0.5 }}>{year}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: theme.palette.text.primary }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>{description}</Typography>
      </Box>
    </Box>
  );
};

const About = () => {
  const theme = useTheme();
  const [isInView, setIsInView] = React.useState(false);
  const statsRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 6, md: 8 }, 
          pb: { xs: 4, md: 6 },
          textAlign: 'center',
          background: `radial-gradient(circle at top, rgba(212,175,55,${isDark ? '0.12' : '0.08'}) 0%, ${theme.palette.background.default} 70%)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
          <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Typography 
              variant="overline" 
              sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 4, mb: 2, display: 'block' }}
            >
              A DAINIK BHASKAR INITIATIVE
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.8rem', md: '4.5rem' }, 
                fontWeight: 900, 
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: -1,
                color: theme.palette.text.primary
              }}
            >
              Empowering Society through <Box component="span" sx={{ color: '#D4AF37' }}>Dignity</Box> & <Box component="span" sx={{ color: '#D4AF37' }}>Knowledge.</Box>
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 6, 
                maxWidth: 800, 
                mx: 'auto', 
                fontWeight: 400, 
                px: 2, 
                lineHeight: 1.6,
                color: theme.palette.text.secondary 
              }}
            >
              DB Shiksha, powered by the legacy of the Dainik Bhaskar Group, is committed to transforming the educational landscape of India by bridging the gap between potential and opportunity.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ px: 2 }}>
              <ButtonPrimary 
                size="large" 
                component={RouterLink} 
                to="/programs"
                sx={{ py: 2, px: 5, fontSize: '1.1rem' }}
              >
                Our Educational Programs
              </ButtonPrimary>
              <ButtonPrimary 
                variant="outlined" 
                size="large" 
                component={RouterLink} 
                to="/contact"
                sx={{ 
                  py: 2, 
                  px: 5, 
                  fontSize: '1.1rem', 
                  color: theme.palette.text.primary, 
                  borderColor: 'rgba(212,175,55,0.5)',
                  '&:hover': {
                    borderColor: '#D4AF37'
                  }
                }}
              >
                Join the Mission
              </ButtonPrimary>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box 
        ref={statsRef} 
        sx={{ 
          py: 4, 
          borderY: `1px solid ${isDark ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.1)'}`, 
          bgcolor: theme.palette.background.paper 
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}><StatItem targetValue={22} suffix="+" label="States Covered" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={2008} suffix="" label="Foundation Year" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={2} suffix=" Lakh+" label="Beneficiaries Trained" active={isInView} /></Grid>
            <Grid item xs={6} md={3}><StatItem targetValue={500} suffix="+" label="Skill Centres" active={isInView} /></Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Approach / Methodology */}
      <SectionWrapper 
        title="Our Core Strategy" 
        subtitle="How we empower marginalized and remote communities across the nation."
        bgcolor="transparent"
      >
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {[
            { 
              icon: PsychologyIcon, 
              title: "Skill Development", 
              desc: "Providing vocational training that translates directly into financial independence and self-reliance." 
            },
            { 
              icon: RocketLaunchIcon, 
              title: "Digital Bridging", 
              desc: "Ensuring technology-enabled learning reaches Tier II and Tier III cities to close the digital divide." 
            },
            { 
              icon: VerifiedIcon, 
              title: "Social Dignity", 
              desc: "Fostering an inclusive society where every individual can lead a life of responsibility and respect." 
            }
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  bgcolor: theme.palette.background.paper, 
                  borderRadius: '8px', 
                  border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.05)' : 'rgba(212, 175, 55, 0.1)'}`, 
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { borderColor: '#D4AF37' }
                }}
              >
                <Box sx={{ 
                  width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(212, 175, 55, 0.08)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 
                }}>
                  <item.icon sx={{ fontSize: 40, color: '#D4AF37' }} />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: theme.palette.text.primary }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7, color: theme.palette.text.secondary }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* The Story Grid */}
      <SectionWrapper bgcolor={theme.palette.background.paper}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
                sx={{ 
                  width: '100%', 
                  borderRadius: '8px',
                  boxShadow: isDark ? '0 25px 50px rgba(0,0,0,0.6)' : '0 25px 50px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 2
                }} 
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: -30, 
                  right: -30, 
                  width: '100%', 
                  height: '100%', 
                  border: '3px solid #D4AF37', 
                  borderRadius: '8px',
                  zIndex: 1,
                  display: { xs: 'none', md: 'block' }
                }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2, fontWeight: 700 }}>THE LEGACY OF DB GROUP</Typography>
            <Typography variant="h3" sx={{ mb: 4, mt: 1, fontWeight: 900, lineHeight: 1.2, color: theme.palette.text.primary }}>
              Empowering India at the <Box component="span" sx={{ color: '#D4AF37' }}>Grassroots.</Box>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
              Established in 2008, the Bhavsar Foundation (formerly Bhaskar Foundation) serves as the social development arm of the Dainik Bhaskar Group. We work in the most challenging parts of India to address the needs of deprived sections.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
              Our mission is to bring these segments into the mainstream of the country's development by imparting literacy, basic life skills, and professional vocational training.
            </Typography>
            <Divider sx={{ my: 2, borderColor: isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(0,0,0,0.1)' }} />
            <Stack direction="row" spacing={4}>
              <Box>
                <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 800 }}>2 Lakh+</Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>People Trained</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 800 }}>1.5 Lakh+</Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>Families Supported</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Evolution Timeline */}
      <SectionWrapper title="Our Journey" subtitle="Mapping the progress of Bhaskar Foundation's nationwide initiatives." bgcolor="transparent">
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ pr: { md: 4 }, pl: { md: 8 } }}>
                <TimelineItem 
                year="2008" 
                title="Foundation Established" 
                description="Dainik Bhaskar Group launches its social arm to drive developmental and CSR activities." 
              />
              <TimelineItem 
                year="2012" 
                title="Skill Development Focus" 
                description="Intensification of vocational training programs across North and Central India." 
              />
              <TimelineItem 
                year="2018" 
                title="Bhavsar Foundation" 
                description="Rebranded with an expanded vision to touch lives in 22 states across India." 
              />
              <TimelineItem 
                year="Present" 
                title="Digital Transformation" 
                description="Integrating technology into primary education and bridging the digital divide for thousands of children."
                isLast
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: '100%',
                  height: '100%',
                  border: '2px solid rgba(212, 175, 55, 0.1)',
                  borderRadius: '16px',
                  zIndex: 0
                }
              }}
            >
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                sx={{ 
                  width: '100%', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  position: 'relative',
                  zIndex: 1
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>

      {/* Vision & Mission Split */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, height: '100%', border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)'}`, borderRadius: '8px' }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: '#D4AF37' }}>Our Vision</Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.2rem', 
                    fontStyle: 'italic', 
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary 
                  }}
                >
                  "To Empower society with responsibility and dignity, contributing to building a country of enlightened people with economic reliability."
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, height: '100%', border: `1px solid ${isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.2)'}`, borderRadius: '8px' }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: '#D4AF37' }}>Our Mission</Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.2rem', 
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary 
                  }}
                >
                  To strengthen the primary education ecosystem, inspire students to continue learning, and empower marginalized communities through literacy and life skills.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Grid */}
      <SectionWrapper title="Our Foundation Values" subtitle="The core values inherited from the Dainik Bhaskar Group culture.">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <ValueCard 
              icon={GroupsIcon} 
              title="Responsibility" 
              description="Owning the transformation of society with dedicated grassroots initiatives."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValueCard 
              icon={PsychologyIcon} 
              title="Mainstreaming" 
              description="Integrating marginalized sections into the national development narrative."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValueCard 
              icon={TravelExploreIcon} 
              title="Inclusive Reach" 
              description="A presence across 22 states, leaving no community behind in the race for progress."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValueCard 
              icon={SchoolIcon} 
              title="Empowerment" 
              description="Unlocking the true potential of India's youth through vocational excellence."
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 8 }, 
          textAlign: 'center', 
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          borderTop: `1px solid ${isDark ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.2)'}`
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Typography 
              variant="h2" 
              sx={{ mb: 4, fontWeight: 900, color: theme.palette.text.primary }}
            >
              Join the <Box component="span" sx={{ color: '#D4AF37' }}>Bhaskar Legacy.</Box>
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ mb: 6, maxWidth: 650, mx: 'auto', color: theme.palette.text.secondary }}
            >
              Be a part of a movement that is redefining self-reliance and dignity for millions across India.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ px: 2 }}>
              <ButtonPrimary 
                size="large" 
                component={RouterLink} 
                to="/programs"
                sx={{ py: 2.5, px: 8, fontSize: '1.2rem', boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)' }}
              >
                Explore Our Initiatives
              </ButtonPrimary>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
