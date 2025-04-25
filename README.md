# url-shortner
🔧 Project: Real-Time Chatting App
Tech Stack: Node.js, Express.js, Socket.IO, MongoDB, EJS

📌 Description:
A real-time chatting application that allows multiple users to communicate instantly via WebSockets. The app uses Socket.IO for real-time communication and MongoDB for storing user and message data. EJS is used for rendering dynamic HTML pages.

🚀 Features:
Real-time two-way communication using Socket.IO

User registration and login (optional for your version)

Chat room functionality (optional: private rooms, group chats)

Message history stored in MongoDB

Typing indicator

Clean UI rendered with EJS templates

Timestamps for messages

🗂️ Project Structure:
bash
Copy
Edit
chat-app/
│
├── public/                 # Static files (CSS, client-side JS)
│   └── js/
│       └── chat.js         # Socket.IO client-side logic
│
├── views/                  # EJS templates
│   └── index.ejs
│
├── models/
│   └── Message.js          # Mongoose schema for messages
│
├── routes/
│   └── index.js            # Route for home page
│
├── .env                    # Environment variables
├── app.js                  # Main server file
├── package.json
🧠 Key Dependencies:
bash
Copy
Edit
npm install express mongoose socket.io ejs dotenv
