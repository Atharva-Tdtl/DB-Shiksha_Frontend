import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  LinearProgress,
  Chip,
  Fade,
  Stack,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import quizData from '../data/AI_Quiz.json';
import { useNavigate } from 'react-router-dom';

const AIReadinessQuiz = ({ setIsQuizActive }) => {
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Set quiz as active globally
    if (setIsQuizActive) setIsQuizActive(true);

    // Randomize and pick 20 questions
    const shuffled = [...quizData.questions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, 20));

    // Prevent browser exit/refresh
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (setIsQuizActive) setIsQuizActive(false);
    };
  }, [setIsQuizActive]);

  useEffect(() => {
    // When quiz is complete, allow exit
    if (quizComplete && setIsQuizActive) {
      setIsQuizActive(false);
    }
  }, [quizComplete, setIsQuizActive]);

  if (activeQuestions.length === 0) return null;

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;

  const handleAnswerSelect = (optionKey) => {
    if (showFeedback) return;

    const selectedLetter = optionKey; // A, B, C, D
    const correctLetter = currentQuestion.answer;
    const correct = selectedLetter === correctLetter;

    setSelectedAnswer(optionKey);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(prev => prev + 1);
    }

    // Auto move to next question after feedback
    setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        if (currentQuestionIndex < activeQuestions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
          setIsCorrect(null);
          setFade(true);
        } else {
          setQuizComplete(true);
        }
      }, 500);
    }, 1500);
  };

  const getPerformanceTier = (score) => {
    if (score >= 15) return { 
      tier: 'AI Visionary', 
      course: 'AI Strategy for Leaders', 
      price: '₹18,000',
      description: 'You have a strong grasp of AI strategy and implementation.'
    };
    if (score >= 9) return { 
      tier: 'AI Practitioner', 
      course: 'AI for Professionals', 
      price: '₹7,999',
      description: 'You understand the core concepts and are ready to apply them.'
    };
    return { 
      tier: 'AI Explorer', 
      course: 'AI for Everyone', 
      price: '₹1,999',
      description: 'A great start! You are ready to dive into the fundamentals.'
    };
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizComplete(false);
    setShowFeedback(false);
    setIsCorrect(null);
    setFade(true);
    // Re-shuffle
    const shuffled = [...quizData.questions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, 20));
  };

  if (quizComplete) {
    const { tier, course, price, description } = getPerformanceTier(score);
    const percentage = Math.round((score / activeQuestions.length) * 100);

    return (
      <Fade in={true} timeout={800}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: 4, 
            textAlign: 'center',
            bgcolor: 'background.paper',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#D4AF37' }}>
            Quiz Complete!
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Your Score: {score} / {activeQuestions.length} ({percentage}%)
          </Typography>

          <Box sx={{ mb: 6, p: 4, bgcolor: 'rgba(212, 175, 55, 0.05)', borderRadius: 4, border: '2px solid #D4AF37' }}>
            <Chip 
              label={tier} 
              sx={{ 
                bgcolor: '#D4AF37', 
                color: '#fff', 
                fontWeight: 700, 
                px: 2, 
                py: 2.5, 
                fontSize: '1.1rem',
                mb: 2
              }} 
            />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{description}</Typography>
            <Divider sx={{ my: 3, borderColor: 'rgba(212, 175, 55, 0.1)' }} />
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>Recommended DBShiksha Course:</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>{course}</Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 700, mb: 3 }}>{price}</Typography>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate('/programs')}
              sx={{ px: 6, py: 1.5, fontWeight: 700 }}
            >
              Enroll Now
            </Button>
          </Box>

          <Button 
            startIcon={<RestartAltIcon />} 
            onClick={resetQuiz}
            color="inherit"
            sx={{ fontWeight: 600 }}
          >
            Retake Quiz
          </Button>
        </Paper>
      </Fade>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      {/* Progress Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            Question {currentQuestionIndex + 1} of {activeQuestions.length}
          </Typography>
          <Chip 
            label={currentQuestion.category} 
            size="small" 
            sx={{ bgcolor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', fontWeight: 700 }} 
          />
        </Stack>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 10, 
            borderRadius: 5, 
            bgcolor: 'rgba(212, 175, 55, 0.1)',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#D4AF37',
              borderRadius: 5
            }
          }} 
        />
      </Box>

      {/* Question Card */}
      <Fade in={fade} timeout={500}>
        <Card sx={{ borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', overflow: 'visible' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, lineHeight: 1.4 }}>
              {currentQuestion.question}
            </Typography>

            <Stack spacing={2}>
              {Object.entries(currentQuestion.options).map(([key, value]) => {
                const isSelected = selectedAnswer === key;
                const isCorrectOption = key === currentQuestion.answer;
                
                let borderColor = 'rgba(212, 175, 55, 0.2)';
                let bgColor = 'transparent';
                let icon = null;

                if (showFeedback) {
                  if (isCorrectOption) {
                    borderColor = '#4CAF50';
                    bgColor = 'rgba(76, 175, 80, 0.1)';
                    icon = <CheckCircleOutlineIcon sx={{ color: '#4CAF50' }} />;
                  } else if (isSelected && !isCorrect) {
                    borderColor = '#f44336';
                    bgColor = 'rgba(244, 67, 54, 0.1)';
                    icon = <ErrorOutlineIcon sx={{ color: '#f44336' }} />;
                  }
                } else if (isSelected) {
                  borderColor = '#D4AF37';
                  bgColor = 'rgba(212, 175, 55, 0.05)';
                }

                return (
                  <Button
                    key={key}
                    variant="outlined"
                    fullWidth
                    onClick={() => handleAnswerSelect(key)}
                    disabled={showFeedback}
                    sx={{
                      justifyContent: 'space-between',
                      p: 2.5,
                      borderRadius: 3,
                      borderWidth: '2px',
                      borderColor: borderColor,
                      bgcolor: bgColor,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.primary',
                      fontSize: '1rem',
                      fontWeight: isSelected ? 700 : 500,
                      '&:hover': {
                        borderWidth: '2px',
                        borderColor: '#D4AF37',
                        bgcolor: 'rgba(212, 175, 55, 0.05)',
                      },
                      '&.Mui-disabled': {
                        borderWidth: '2px',
                        borderColor: borderColor,
                        color: 'text.primary',
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 'inherit' }}>{`${key}) ${value}`}</Typography>
                    {icon}
                  </Button>
                );
              })}
            </Stack>

            {showFeedback && (
              <Fade in={true}>
                <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <InfoOutlinedIcon color={isCorrect ? 'success' : 'error'} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: isCorrect ? '#2e7d32' : '#d32f2f' }}>
                    {isCorrect ? 'Correct! Well done.' : `Incorrect. The correct answer is ${currentQuestion.answer}.`}
                  </Typography>
                </Box>
              </Fade>
            )}
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default AIReadinessQuiz;
