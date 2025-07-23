const form = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    alert("Both name and feedback are required.");
    return;
  }

  const feedback = { name, message };

  // Send POST request to server
  await fetch('/api/feedbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(feedback)
  });

  form.reset();
  loadFeedbacks();
});

// Load and display all feedbacks
async function loadFeedbacks() {
  const res = await fetch('/api/feedbacks');
  const data = await res.json();

  feedbackList.innerHTML = '';
  data.reverse().forEach(item => {
    const div = document.createElement('div');
    div.className = 'feedback-item';

    div.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>${item.message}</p>
      <p class="timestamp">${new Date(item.timestamp).toLocaleString()}</p>
    `;

    feedbackList.appendChild(div);
  });
}

// Load on page load
loadFeedbacks();
