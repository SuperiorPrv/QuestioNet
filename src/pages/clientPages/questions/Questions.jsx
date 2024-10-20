// src/pages/QuestionsPage.jsx

import  { useEffect, useState } from 'react';
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
      const {data:user} = await axios.get(`https://questionet-data-server.glitch.me/api/users/${localStorage.getItem("userID")}`)
      user.rating += updatedVotes;
      await axios.put(`https://questionet-data-server.glitch.me/api/users/${localStorage.getItem("userID")}`,user);
      fetchQuestions(); // Refresh the questions list
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <Box sx={{background:"linear-gradient(to right , #A2D2FF , #CDB4DB )", width:'100%'}}>
      <Typography variant="h4" gutterBottom>Questions</Typography>

      {/* Form to add a new question */}
      <TextField
        label="Ask a new question"
        fullWidth
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddQuestion} disabled={!newQuestion}>
        Submit Question
      </Button>

      {/* List of questions */}
      {questions.map((question) => (
        <Card key={question.id} data-aos="fade-up" style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6">{question.title}</Typography>
            <Typography variant="body2" color="textSecondary">Votes: {question.votes}</Typography>
            <IconButton onClick={() => handleVote(question.id, 'up')}><ThumbUp /></IconButton>
            <IconButton onClick={() => handleVote(question.id, 'down')}><ThumbDown /></IconButton>

            {/* Answer section */}
            <Typography variant="subtitle1" gutterBottom>Answers:</Typography>
            {question.answers.map((answer, index) => (
              <Typography key={index} variant="body2" color="textPrimary" style={{ marginBottom: '10px' }}>
                - {answer}
              </Typography>
            ))}

            {/* Add an answer */}
            {selectedQuestionId === question.id ? (
              <>
                <TextField
                  label="Your answer"
                  fullWidth
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  onClick={() => handleAddAnswer(question.id)}
                  disabled={!newAnswer}
                >
                  Submit Answer
                </Button>
              </>
            ) : (
              <Button variant="outlined" onClick={() => setSelectedQuestionId(question.id)}>
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
