import { useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchQuestions();
  }, []);

  // Fetching questions from the API (async)
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://questionet-data-server.glitch.me/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Adding a new question (async)
  const handleAddQuestion = async () => {
    try {
      const newQuestionData = {
        title: newQuestion,
        votes: 0,
        date: Date.now(),
        answers: [],
      };
      await axios.post('https://questionet-data-server.glitch.me/api/questions', newQuestionData);
      setNewQuestion(''); // Clear input field
      fetchQuestions(); // Refresh the questions list
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  // Adding an answer to a question (async)
  const handleAddAnswer = async (questionId) => {
    try {
      const question = questions.find((q) => q.id === questionId);
      const updatedQuestion = {
        ...question,
        answers: [...question.answers, newAnswer],
      };
      // Save updated question with new answer to the server
      await axios.put(`https://questionet-data-server.glitch.me/api/questions/${questionId}`, updatedQuestion);
      setNewAnswer(''); // Clear input field
      setSelectedQuestionId(null); // Close the answer form
      fetchQuestions(); // Refresh the questions list
    } catch (error) {
      console.error('Error adding answer:', error);
    }
  };

  // Voting for a question (async)
  const handleVote = async (questionId, type) => {
    try {
      const question = questions.find((q) => q.id === questionId);
      const updatedVotes = type === 'up' ? question.votes + 1 : question.votes - 1;
      const updatedQuestion = {
        ...question,
        votes: updatedVotes,
      };
      // Update the votes on the server
      await axios.put(`https://questionet-data-server.glitch.me/api/questions/${questionId}`, updatedQuestion);
      const {data} = await axios.get(`https://questionet-data-server.glitch.me/api/users/${localStorage.getItem("userID")}`);
      data.rating += updatedVotes;
      await axios.put(`https://questionet-data-server.glitch.me/api/users/${localStorage.getItem("userID")}`,data);
      fetchQuestions(); // Refresh the questions list
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <Box sx={{ background: "linear-gradient(to right , #A2D2FF , #CDB4DB )", width: '100%', padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        Questions
      </Typography>

      {/* Form to add a new question */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <TextField
          label="Ask a new question"
          fullWidth
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          margin="normal"
          sx={{ maxWidth: '600px', backgroundColor: '#fff', borderRadius: '8px' }}
        />
        <Button
          variant="contained"
          onClick={handleAddQuestion}
          disabled={!newQuestion}
          sx={{
            mt: 2,
            background: 'linear-gradient(to right, #6A0572, #A4508B)',
            color: '#fff',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            '&:hover': { background: 'linear-gradient(to right, #5C0373, #904680)' },
          }}
        >
          Submit Question
        </Button>
      </Box>

      {/* List of questions */}
      {questions.map((question) => (
        <Card
          key={question.id}
          data-aos="fade-up"
          sx={{
            mt: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '15px',
            backgroundColor: '#fff',
            padding: '15px',
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444' }}>
              {question.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Votes: {question.votes}
            </Typography>
            <Box>
              <IconButton
                onClick={() => handleVote(question.id, 'up')}
                sx={{ '&:hover': { color: '#388E3C' } }}
              >
                <ThumbUp />
              </IconButton>
              <IconButton
                onClick={() => handleVote(question.id, 'down')}
                sx={{ '&:hover': { color: '#D32F2F' } }}
              >
                <ThumbDown />
              </IconButton>
            </Box>

            {/* Answer section */}
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#555', mt: 2 }}>
              Answers:
            </Typography>
            {question.answers.map((answer, index) => (
              <Typography key={index} variant="body2" color="textPrimary" sx={{ marginBottom: '10px' }}>
                - {answer}
              </Typography>
            ))}

            {/* Add an answer */}
            {selectedQuestionId === question.id ? (
              <Box>
                <TextField
                  label="Your answer"
                  fullWidth
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  margin="normal"
                  sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}
                />
                <Button
                  variant="contained"
                  onClick={() => handleAddAnswer(question.id)}
                  disabled={!newAnswer}
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(to right, #36D1DC, #5B86E5)',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    '&:hover': { background: 'linear-gradient(to right, #3198BD, #486DCC)' },
                  }}
                >
                  Submit Answer
                </Button>
              </Box>
            ) : (
              <Button
                variant="outlined"
                onClick={() => setSelectedQuestionId(question.id)}
                sx={{
                  mt: 1,
                  borderRadius: '20px',
                  borderColor: '#A4508B',
                  color: '#A4508B',
                  '&:hover': { borderColor: '#904680', color: '#904680' },
                }}
              >
                Answer this question
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default QuestionsPage;
