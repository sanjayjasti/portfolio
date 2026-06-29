"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Real-Time Chat Application",
        tagline: "Full-Stack Real-Time Communication Platform",
        description: "A comprehensive real-time chat application built with React, Node.js, Socket.io, and MongoDB. Features user authentication, group chats, image sharing, and a modern responsive UI with dark/light themes.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Express", "Vite"],
        points: [
            "Real-time messaging with Socket.io, typing indicators, and message persistence in MongoDB.",
            "Secure user authentication with JWT tokens and bcrypt password hashing.",
            "Group chat functionality, image sharing, and responsive design with theme toggle.",
        ],
        links: {
            github: "https://github.com/sanjayjasti18/real-time-chat",
            demo: "/projects/real-time-chat",
        },
    },
    {
        title: "Apple Stock Price Prediction using LSTM",
        tagline: "Deep Learning for Financial Forecasting",
        description: "Built an LSTM-based deep learning model to predict Apple's next-day stock price using live historical data fetched via the Yahoo Finance API. Features benchmarking against traditional ML models and a Flask web application.",
        tech: ["Python", "LSTM", "TensorFlow", "Flask", "Yahoo Finance API", "HTML/CSS/JS"],
        points: [
            "Developed LSTM neural network for time series prediction using historical stock data.",
            "Benchmarked performance against Linear Regression and Random Forest models.",
            "Created Flask-based web app with real-time visualizations and predictions.",
        ],
        links: {
            github: "https://github.com/sanjayjasti18/apple-stock-prediction",
            demo: "/projects/apple-stock-prediction",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 bg-section-alt">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-text-tertiary max-w-2xl mx-auto">
                        A selection of systems I&apos;ve built, focusing on scalability, AI integration, and complex data processing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card-bg border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-secondary font-mono mb-4">{project.tagline}</p>

                                <div className="space-y-4 mb-6">
                                    <p className="text-text-tertiary text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                                        {project.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 bg-card-bg-hover rounded-full text-text-secondary">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-tertiary hover:text-foreground transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    {project.links.demo !== "#" && (
                                        <Link href={project.links.demo} className="flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View Case Study
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
