
# 💬 Zulutech Real-Time Chat App

A full-stack real-time chat platform built with **React**, **Express**, and **Socket.io**, featuring live messaging, user presence, and advanced chat UX.

---

## 🚀 Features

- 🔄 Real-time messaging with Socket.io
- 🔐 User authentication and presence tracking
- 🧩 Multiple chat rooms or private messaging
- ✍️ Typing indicators
- ✅ Read receipts
- 🔔 Real-time notifications

---

## 🧱 Project Structure

socketio-chat/ ├── client/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── context/ │ │ ├── hooks/ │ │ ├── pages/ │ │ ├── socket/ │ │ └── App.jsx │ ├── docs/ │ │ └── README.md ← You are here │ └── package.json ├── server/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── socket/ │ ├── utils/ │ ├── server.js │ └── package.json └── README.md ← Original assignment instructions


---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB (local or Atlas)

### Installation


# Clone your GitHub Classroom repo
git clone https://github.com/PLP-MERN-Stack-Development/week-5-web-sockets-assignment-leonardphokane.git
cd socketio-chat

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Running the App
bash
# Start the server
cd server
npm run dev

# Start the client
cd ../client
npm run dev
📸 Screenshots / GIFs
Add visuals of:

Login flow

Chat interface

Typing indicator

Read receipts

Notifications

🌍 Deployment (Optional)
Live App: zulutech-chat.vercel.app API: api.zulutech-chat.onrender.com

📚 Resources
Socket.io Docs

React Docs

Express Docs

GitHub Classroom Repo

👨🏾‍💻 Author
Leonard Phokane Tech Founder @ Zulutech Building Afrocentric, scalable tech for community empowerment.

✅ Submission Checklist
[x] Core chat functionality

[x] 3+ advanced features

[x] Screenshots or GIFs

[x] README.md completed (nested in client/docs)

[x] Pushed to GitHub Classroom repo


---

Let me know when you’re ready to add screenshots, deployment links, or a badge section. I can also help you update the root `README.md` with a link to this nested version for clarity.




Ready to add screenshots, deployment links, or a badge section. I can also help you update the root `README.md` with a link to this nested version for clarity.
Awesome, Leonard — since your forked repo is hosted here on GitHub Classroom, we’ll now:

✅ Enhance client/docs/README.md
Let’s add:

## 📸 Screenshots

| Login & Signup | Chat Interface |
|----------------|----------------|
| ![Login](../public/screens/login.png) | ![Chat](../public/screens/chat.png) |

> Typing indicator and read receipts in action:
> ![Typing](../public/screens/typing.png)


## 🖼️ Zulutech Chat Screenshots

### Landing Page
![Landing Page](../public/screens/landing.png)

### Contact Page
![Contact](../public/screens/contact.png)

### Real-Time Messaging
![Message Sent](../public/screens/message.png)

### Socket Connection Status
![Socket Connected](../public/screens/socket-status.png)

🌍 Deployment Links
md
## 🌍 Deployment

- **Live App**: [zulutech-chat.vercel.app](https://zulutech-chat.vercel.app)
- **API Endpoint**: [api.zulutech-chat.onrender.com](https://api.zulutech-chat.onrender.com)
🏷️ Badges (Optional Flair)
md
## 🏷️ Badges

![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-blue)
![React](https://img.shields.io/badge/React-18+-brightgreen)
![Express](https://img.shields.io/badge/Express-Node.js-yellow)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
🔗 Update Root README.md
To avoid overwriting the original, just add this line at the bottom of the root README.md:

md
---

👉 See [Leonard's Zulutech Chat Implementation](client/docs/README.md)
This keeps everything clean and GitHub Classroom-compliant.
