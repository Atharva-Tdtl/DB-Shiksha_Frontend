import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ButtonPrimary from '../../components/ButtonPrimary';
import SectionWrapper from '../../components/SectionWrapper';
import { useNavigate } from 'react-router-dom';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const heroImages = [
  "/hero_students.jpg",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
];

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Preload images to avoid flicker
    heroImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <SectionWrapper>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}>
            EMPOWER YOUR FUTURE
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mt: 2, mb: 3, lineHeight: 1.1 }}>
            Master AI with <Box component="span" sx={{ color: '#D4AF37' }}>DBShiksha</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
            The India's leading AI learning platform. Get industry-standard certifications and job-ready skills in Artificial Intelligence and Machine Learning.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <ButtonPrimary size="large" sx={{ px: 4 }} onClick={() => navigate('/programs')}>Explore Programs</ButtonPrimary>
            <ButtonPrimary variant="outlined" color="secondary" size="large" sx={{ px: 4, border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => navigate('/programs')}>Take AI Test</ButtonPrimary>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ 
              width: '100%', 
              borderRadius: 4, 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)', 
              filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.2))',
              transition: 'box-shadow 0.3s ease, filter 0.3s ease, transform 0.3s ease',
              position: 'relative',
              aspectRatio: '4/3', // Maintains exact bounds so no screen shifting occurs
              '&:hover': {
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                filter: 'drop-shadow(0 0 0px rgba(212,175,55,0))',
                transform: 'translateY(2px)'
              },
              '& .swiper': { width: '100%', height: '100%' },
              '& .swiper-button-next, & .swiper-button-prev': {
                color: '#D4AF37',
                padding: '24px',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                '&::after': { fontSize: '24px', fontWeight: 'bold' }
              },
              '&:hover .swiper-button-next, &:hover .swiper-button-prev': {
                opacity: 1,
              },
              // Zoom-in effect
              '& .swiper-slide img': {
                transform: 'scale(1)',
                transition: 'transform 3.5s ease-out', // Slow subtle zoom
              },
              '& .swiper-slide-active img': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1000} // Smooth 1s fade as requested
              loop={true}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {heroImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    component="img"
                    src={src}
                    alt={`AI Platform Visual ${idx + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Hero;
