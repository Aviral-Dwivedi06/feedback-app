const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const feedbackFile = path.join(__dirname, 'feedback.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// GET: Return all feedbacks
app.get('/api/feedbacks', (req, res) => {
  if (!fs.existsSync(feedbackFile)) {
    return res.json([]);
  }

  const data = JSON.parse(fs.readFileSync(feedbackFile, 'utf-8'));
  res.json(data);
});

// POST: Submit feedback
app.post('/api/feedbacks', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Both name and message are required' });
  }

  const newFeedback = {
    name,
    message,
    timestamp: new Date().toISOString()
  };

  let feedbacks = [];
  if (fs.existsSync(feedbackFile)) {
    feedbacks = JSON.parse(fs.readFileSync(feedbackFile, 'utf-8'));
  }

  feedbacks.push(newFeedback);
  fs.writeFileSync(feedbackFile, JSON.stringify(feedbacks, null, 2));

  res.status(201).json({ message: 'Feedback submitted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
