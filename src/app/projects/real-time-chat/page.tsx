"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, Github, MessageSquare, Users, Shield, Database,
    Server, Lock, LayoutDashboard, Terminal, Cpu, Globe, 
    Upload, Bell, Code2, Zap, CheckCircle, Settings,
    Eye, FileImage, Smartphone, Moon
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectStats from "@/components/ProjectStats";

const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "features", label: "Features", icon: MessageSquare },
    { id: "architecture", label: "Architecture", icon: Server },
    { id: "installation", label: "Setup Guide", icon: Settings },
    { id: "api", label: "API & Events", icon: Code2 },
];

const keyStats = [
    { value: "Real-Time", label: "Socket.io Messaging", icon: Zap },
    { value: "JWT", label: "Secure Authentication", icon: Lock },
    { value: "MongoDB", label: "Message Storage", icon: Database },
    { value: "React", label: "Modern Frontend", icon: Globe },
];

const techStack = {
    frontend: ["React v19.2.7", "Vite", "Socket.io Client", "CSS3", "Responsive Design"],
    backend: ["Node.js", "Express v5.2.1", "Socket.io v4.8.3", "JWT", "bcrypt", "Multer", "CORS"],
    database: ["MongoDB", "Mongoose ODM"],
    features: ["Real-time Messaging", "User Authentication", "File Upload", "Group Chats", "Dark/Light Theme"]
};

// Overview Tab
function OverviewTab() {
    return (
        <div className="space-y-8">
            <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <MessageSquare className="text-primary" /> The Vision
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                    A comprehensive real-time chat application built with modern web technologies. 
                    Features include user authentication, real-time messaging, group chats, image sharing, 
                    and a responsive UI with dark/light theme support. Built with React, Node.js, Socket.io, and MongoDB.
                </p>
            </section>

            {/* Architecture Overview */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Server className="text-secondary" /> System Overview
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Frontend</div>
                        <div className="text-xs text-text-tertiary">React + Vite</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Server className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Backend</div>
                        <div className="text-xs text-text-tertiary">Node.js + Express</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-500/10 rounded-xl border border-green-500/20">
                        <Database className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Database</div>
                        <div className="text-xs text-text-tertiary">MongoDB</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Real-Time</div>
                        <div className="text-xs text-text-tertiary">Socket.io</div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Terminal className="text-primary" /> Tech Stack
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(techStack).map(([category, techs]) => (
                        <div key={category} className="bg-card-bg border border-border rounded-xl p-4">
                            <h3 className="text-sm font-bold text-primary mb-3 capitalize">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {techs.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 bg-card-bg-hover rounded-full text-text-secondary">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Features Tab
function FeaturesTab() {
    const coreFeatures = [
        { icon: Zap, title: "Real-time Messaging", desc: "Instant message delivery with Socket.io" },
        { icon: Lock, title: "User Authentication", desc: "JWT tokens with secure login/registration" },
        { icon: Users, title: "Group Chat Functionality", desc: "Create and join group conversations" },
        { icon: FileImage, title: "Image Sharing", desc: "Upload and share images in chats" },
        { icon: Smartphone, title: "Responsive Design", desc: "Works perfectly on mobile and desktop" },
        { icon: Moon, title: "Dark/Light Theme", desc: "Toggle between dark and light modes" },
    ];

    const technicalFeatures = [
        { icon: Bell, title: "Typing Indicators", desc: "See when users are typing messages" },
        { icon: Database, title: "Message History", desc: "All messages stored in MongoDB" },
        { icon: Shield, title: "Secure Authentication", desc: "bcrypt password hashing" },
        { icon: Upload, title: "File Upload", desc: "Multer for handling image uploads" },
    ];

    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <MessageSquare className="text-primary" /> Core Features
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {coreFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-card-bg border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
                        >
                            <feature.icon className="w-6 h-6 text-primary mb-2" />
                            <h3 className="font-bold text-text-primary mb-1">{feature.title}</h3>
                            <p className="text-sm text-text-tertiary">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Settings className="text-secondary" /> Technical Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {technicalFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-card-bg border border-border rounded-xl p-4 hover:border-secondary/30 transition-colors"
                        >
                            <feature.icon className="w-6 h-6 text-secondary mb-2" />
                            <h3 className="font-bold text-text-primary mb-1">{feature.title}</h3>
                            <p className="text-sm text-text-tertiary">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Architecture Tab
function ArchitectureTab() {
    return (
        <div className="space-y-8">
            {/* Project Structure */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Server className="text-secondary" /> Project Structure
                </h2>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
{`chatapp/
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
└── README.md             # Documentation`}
                    </pre>
                </div>
            </section>

            {/* System Flow */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Zap className="text-primary" /> Real-Time Communication Flow
                </h2>
                
                <div className="flex flex-col items-center space-y-4 font-mono text-sm">
                    {/* CLIENT */}
                    <div className="px-6 py-3 bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/50 rounded-lg text-blue-600 dark:text-blue-300 w-full max-w-2xl">
                        <div className="font-bold text-center mb-2">📱 CLIENT (React + Socket.io)</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Login/Register", "Chat Interface", "Group Chats", "Image Upload", "Theme Toggle"].map(m => (
                                <span key={m} className="px-2 py-1 bg-blue-200 dark:bg-blue-500/30 rounded text-xs">{m}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-0.5 h-6 bg-border"></div>
                        <span className="text-xs text-text-muted bg-surface px-2 py-1 rounded">WebSocket + REST API</span>
                        <div className="w-0.5 h-6 bg-border"></div>
                    </div>

                    {/* SERVER */}
                    <div className="px-6 py-3 bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/50 rounded-lg text-purple-600 dark:text-purple-300 w-full max-w-2xl">
                        <div className="font-bold text-center mb-2">⚙️ SERVER (Node.js + Express + Socket.io)</div>
                        <div className="text-xs text-text-tertiary text-center mb-2">Routes: /auth /messages /groups /upload /users</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["JWT Auth", "Socket Handlers", "File Upload", "CORS", "Real-time Events"].map(s => (
                                <span key={s} className="px-2 py-1 bg-purple-200 dark:bg-purple-500/30 rounded text-xs">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="w-0.5 h-6 bg-border"></div>

                    {/* DATABASE */}
                    <div className="px-6 py-3 bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/50 rounded-lg text-green-600 dark:text-green-300 w-full max-w-2xl">
                        <div className="font-bold text-center mb-2">🗄️ MONGODB</div>
                        <div className="text-xs text-text-tertiary text-center">Users • Messages • Groups • File Metadata</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Installation Tab
function InstallationTab() {
    return (
        <div className="space-y-8">
            <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <Settings className="text-primary" /> Installation Guide
                </h2>
                <p className="text-text-secondary leading-relaxed">
                    Follow these steps to set up the Real-Time Chat Application on your local machine.
                </p>
            </section>

            {/* Prerequisites */}
            <section className="bg-card-bg border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">📋 Prerequisites</h3>
                <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        Node.js (v14 or higher)
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        npm or yarn package manager
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        MongoDB (local installation or MongoDB Atlas account)
                    </li>
                </ul>
            </section>

            {/* Installation Steps */}
            <section className="space-y-6">
                <h3 className="text-xl font-bold text-text-primary">⚙️ Installation Steps</h3>
                
                {/* Step 1 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">1. Clone the repository</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`git clone <repository-url>
cd chatapp`}
                    </pre>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">2. Install server dependencies</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`cd server
npm install`}
                    </pre>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">3. Install client dependencies</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`cd ../client
npm install`}
                    </pre>
                </div>

                {/* Step 4 */}
                <div className="bg-card-bg border border-border rounded-xl p-6">
                    <h4 className="text-primary font-bold mb-4">4. Environment Configuration</h4>
                    
                    <div className="space-y-4">
                        <div>
                            <h5 className="font-semibold text-text-primary mb-2">Server Configuration (.env in server directory):</h5>
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                                <pre className="text-green-400 text-sm font-mono">
{`MONGO_URI=mongodb://localhost:27017/chatapp
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
CLIENT_URL=http://localhost:5173`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-semibold text-text-primary mb-2">Client Configuration (.env in client directory):</h5>
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                                <pre className="text-green-400 text-sm font-mono">
{`VITE_SERVER_URL=http://localhost:5000`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">5. Run the application</h4>
                    <div className="space-y-2">
                        <p className="text-yellow-400 text-sm">Start the server:</p>
                        <pre className="text-green-400 text-sm font-mono">
{`cd server
npm run dev`}
                        </pre>
                        <p className="text-yellow-400 text-sm">Start the client (in new terminal):</p>
                        <pre className="text-green-400 text-sm font-mono">
{`cd client
npm run dev`}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}

// API Tab
function APITab() {
    const apiEndpoints = [
        { method: "POST", path: "/api/auth/register", desc: "User registration" },
        { method: "POST", path: "/api/auth/login", desc: "User login" },
        { method: "GET", path: "/messages", desc: "Get message history" },
        { method: "GET", path: "/messages/group/:groupId", desc: "Get group message history" },
        { method: "GET", path: "/api/groups", desc: "Get all groups" },
        { method: "POST", path: "/api/groups", desc: "Create new group" },
        { method: "POST", path: "/api/groups/:groupId/join", desc: "Join a group" },
        { method: "POST", path: "/api/upload/image", desc: "Upload image files" },
        { method: "GET", path: "/api/users", desc: "Get all users" },
    ];

    const socketEvents = {
        clientToServer: [
            { event: "send_message", desc: "Send a message to global chat" },
            { event: "send_group_message", desc: "Send a message to a specific group" },
            { event: "join_group", desc: "Join a group chat room" },
            { event: "typing", desc: "Indicate user is typing" },
            { event: "stop_typing", desc: "Indicate user stopped typing" },
        ],
        serverToClient: [
            { event: "receive_message", desc: "Receive a new message in global chat" },
            { event: "receive_group_message", desc: "Receive a new message in group chat" },
            { event: "show_typing", desc: "Show typing indicator" },
            { event: "hide_typing", desc: "Hide typing indicator" },
        ]
    };

    return (
        <div className="space-y-8">
            {/* API Endpoints */}
            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Code2 className="text-primary" /> API Endpoints
                </h2>
                <div className="space-y-2">
                    {apiEndpoints.map((endpoint, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-card-bg border border-border rounded-lg">
                            <span className={`px-2 py-1 text-xs font-bold rounded ${
                                endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                                endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                                'bg-purple-500/20 text-purple-400'
                            }`}>
                                {endpoint.method}
                            </span>
                            <code className="font-mono text-text-primary">{endpoint.path}</code>
                            <span className="text-text-tertiary text-sm">{endpoint.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Socket Events */}
            <section className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <Zap className="text-blue-500" /> Client to Server Events
                    </h3>
                    <div className="space-y-2">
                        {socketEvents.clientToServer.map((event, i) => (
                            <div key={i} className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <code className="font-mono text-blue-400 text-sm">{event.event}</code>
                                <p className="text-text-tertiary text-sm mt-1">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <Zap className="text-green-500" /> Server to Client Events
                    </h3>
                    <div className="space-y-2">
                        {socketEvents.serverToClient.map((event, i) => (
                            <div key={i} className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                <code className="font-mono text-green-400 text-sm">{event.event}</code>
                                <p className="text-text-tertiary text-sm mt-1">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function ChatAppProject() {
    const [activeTab, setActiveTab] = useState("overview");

    const router = useRouter();

    const renderTabContent = () => {
        switch (activeTab) {
            case "overview": return <OverviewTab />;
            case "features": return <FeaturesTab />;
            case "architecture": return <ArchitectureTab />;
            case "installation": return <InstallationTab />;
            case "api": return <APITab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground pt-20">
                {/* Hero Section */}
                <section className="relative py-16 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Projects
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">💬</span>
                                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
                                    Real-Time Chat App
                                </h1>
                            </div>
                            <p className="text-xl text-secondary font-mono mb-6">
                                Full-Stack Real-Time Communication Platform
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {keyStats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-card-bg border border-border rounded-xl p-4 text-center"
                                    >
                                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <div className="text-xl font-bold text-text-primary">{stat.value}</div>
                                        <div className="text-xs text-text-tertiary">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* GitHub Link */}
                            <a
                                href="https://github.com/sanjayjasti18/real-time-chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-card-bg-hover hover:bg-black/5 dark:hover:bg-white/20 border border-border rounded-lg transition-colors"
                            >
                                <Github className="w-5 h-5" /> View on GitHub
                            </a>

                            <ProjectStats slug="real-time-chat" />
                        </motion.div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="py-8 px-4 border-b border-border sticky top-16 bg-background/80 backdrop-blur-md z-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex gap-1 bg-card-bg border border-border rounded-xl p-1 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm font-medium ${
                                        activeTab === tab.id
                                            ? "bg-primary text-white shadow-sm"
                                            : "text-text-tertiary hover:text-text-primary hover:bg-card-bg-hover"
                                    }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderTabContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}