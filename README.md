# Feedback App

This project is a minimal full-stack web application designed to collect and display user feedback. It has been developed as part of a technical submission for the Mental Health Support Group to demonstrate core web development skills including form handling, backend integration, persistent storage, responsive styling, and GitHub deployment.

## Features

- Users can submit their name and feedback through a form.
- Submitted feedback is displayed below the form, with the latest feedback shown first.
- Feedback entries include timestamps.
- Form validation ensures the name and message fields are not empty.
- Data is stored persistently using a JSON file on the backend.
- Fully responsive layout using Tailwind CSS.
- Deployed via GitHub Pages and/or Render (for backend).

## Tech Stack

### Frontend

- **Framework:** React with Vite
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts – *Playwrite VN Guides*
- **Structure:**
  - `App.jsx` handles user input, state, and dynamic rendering.
  - Tailwind utility classes are used throughout for styling consistency.
  - Font and background enhancements for an accessible and modern user interface.

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Storage:** Local JSON file
- **Endpoints:**
  - `GET /feedbacks`: Returns all feedback data
  - `POST /feedbacks`: Saves new feedback with a timestamp

## Installation and Running Locally

### Prerequisites

- Node.js and npm installed

### Clone the Repository

```bash
git clone https://github.com/yourusername/feedback-app.git
cd feedback-app

## Backend setup
cd server
npm install
node index.js

## Fronted setup
cd client
npm install
npm run dev

## Deployment 
Feedback-App is deployed using GitHub Pages and is publicly accessible.

Visit the Feedback-App webpage:  
https://Aviral-Dwivedi06.github.io/feedback-app/

Developed by Aviral Dwivedi  
GitHub: https://github.com/Aviral-Dwivedi06
