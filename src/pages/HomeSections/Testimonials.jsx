import React from 'react';
import { Box, Typography, Avatar, Paper, Rating } from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  { name: 'Arjun Mehta', role: 'Software Engineer', text: 'DBShiksha transformed my understanding of LLMs. The hands-on labs were incredible.', avatar: 'A' },
  { name: 'Sarah Khan', role: 'Data Scientist', text: 'The Generative AI course is the best I have ever taken. Worth every penny of the investment.', avatar: 'S' },
  { name: 'Vikram Singh', role: 'Product Manager', text: 'Highly recommend the Corporate Training program for teams looking to stay ahead in 2024.', avatar: 'V' }
];

// Duplicate reviews to ensure flawless infinite loop behavior with slidesPerView 3
const enhancedReviews = [...reviews, ...reviews, ...reviews];

const Testimonials = () => {
  return (
    <SectionWrapper title="Success Stories" subtitle="Join 50,000+ students who have revolutionized their careers with our AI programs.">
      <Box sx={{ 
        '.swiper': { py: 4, px: { xs: 2, md: 2 } }
      }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={800}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {enhancedReviews.map((rev, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 20px 40px rgba(212,175,55,0.1)',
                  }
                }}
              >
                <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#D4AF37' }} />
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary', flexGrow: 1 }}>"{rev.text}"</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: '#D4AF37', fontWeight: 700 }}>{rev.avatar}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{rev.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{rev.role}</Typography>
                  </Box>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </SectionWrapper>
  );
};

export default Testimonials;
