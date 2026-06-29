# Chat App

A real-time chat application built with React, Node.js, Express, Socket.io, and MongoDB. Features include user authentication, real-time messaging, group chats, image sharing, and a modern responsive UI.

## 🚀 Features

- **Real-time messaging** with Socket.io
- **User authentication** with JWT tokens
- **Group chat functionality**
- **Image sharing** with file upload
- **Responsive design** with dark/light theme
- **Typing indicators**
- **Message history** stored in MongoDB
- **Secure authentication** with bcrypt password hashing

## 🛠️ Tech Stack

### Frontend
- **React** (v19.2.7) - UI framework
- **Vite** - Build tool and development server
- **Socket.io Client** - Real-time communication
- **CSS3** - Styling with custom themes

### Backend
- **Node.js** - Runtime environment
- **Express** (v5.2.1) - Web framework
- **Socket.io** (v4.8.3) - Real-time bidirectional communication
- **MongoDB** with Mongoose - Database and ODM
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd chatapp
```

### 2. Install server dependencies
```bash
cd server
npm install
```

### 3. Install client dependencies
```bash
cd ../client
npm install
```

### 4. Environment Configuration

#### Server Configuration
Create a `.env` file in the `server` directory:

```env
MONGO_URI=mongodb://localhost:27017/chatapp
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
CLIENT_URL=http://localhost:5173
```

#### Client Configuration  
Create a `.env` file in the `client` directory:

```env
VITE_SERVER_URL=http://localhost:5000
```

**⚠️ Important:** 
- Replace `your_super_secret_jwt_key_here` with a strong, unique secret key
- Update `MONGO_URI` with your actual MongoDB connection string
- Never commit `.env` files to version control

## 🚀 Running the Application

### Development Mode

1. **Start the server:**
```bash
cd server
npm run dev
```
The server will start on `http://localhost:5000`

2. **Start the client** (in a new terminal):
```bash
cd client
npm run dev
```
The client will start on `http://localhost:5173`

### Production Build

1. **Build the client:**
```bash
cd client
npm run build
```

2. **Start the server:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
chatapp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/        # Static assets (images, icons)
│   │   ├── context/       # React contexts (Auth, Theme)
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main App component
│   │   ├── App.css        # Global styles
│   │   └── main.jsx       # Entry point
│   ├── public/            # Public assets
│   ├── package.json       # Client dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── uploads/          # File upload directory
│   ├── index.js          # Server entry point
│   └── package.json      # Server dependencies
└── README.md             # This file
```

## 🔧 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Message Routes (`/messages`)
- `GET /messages` - Get message history
- `GET /messages/group/:groupId` - Get group message history

### Group Routes (`/api/groups`)
- `GET /api/groups` - Get all groups
- `POST /api/groups` - Create new group
- `POST /api/groups/:groupId/join` - Join a group

### Upload Routes (`/api/upload`)
- `POST /api/upload/image` - Upload image files

### User Routes (`/api/users`)
- `GET /api/users` - Get all users

## 🔌 Socket.io Events

### Client to Server
- `send_message` - Send a message to global chat
- `send_group_message` - Send a message to a specific group
- `join_group` - Join a group chat room
- `typing` - Indicate user is typing
- `stop_typing` - Indicate user stopped typing

### Server to Client
- `receive_message` - Receive a new message in global chat
- `receive_group_message` - Receive a new message in group chat
- `show_typing` - Show typing indicator
- `hide_typing` - Hide typing indicator

## 🎨 Features in Detail

### Authentication
- Secure user registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes and real-time authentication

### Real-time Messaging
- Instant message delivery with Socket.io
- Global chat room for all users
- Private group chats
- Message persistence in MongoDB

### File Upload
- Image sharing in chats
- Secure file upload with Multer
- File validation and storage

### UI/UX
- Responsive design for mobile and desktop
- Dark/Light theme toggle
- Modern, clean interface
- Typing indicators
- Message timestamps

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or check your Atlas connection string
   - Verify the `MONGO_URI` in your `.env` file

2. **CORS Error**
   - Check that `CLIENT_URL` in server `.env` matches your frontend URL
   - Ensure both server and client are running on correct ports

3. **JWT Authentication Error**
   - Verify `JWT_SECRET` is set in server `.env`
   - Check that the secret is the same across server restarts

4. **Socket Connection Issues**
   - Ensure server is running before starting client
   - Check that ports 5000 and 5173 are not blocked by firewall

### Debug Mode
Enable debug logs by setting:
```env
DEBUG=socket.io:*
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔮 Future Enhancements

- [ ] Private messaging between users
- [ ] Message reactions and emoji support
- [ ] File sharing (documents, videos)
- [ ] Voice messages
- [ ] Message encryption
- [ ] User presence indicators
- [ ] Message search functionality
- [ ] Push notifications
- [ ] Mobile app with React Native

---

**Happy Chatting! 💬**