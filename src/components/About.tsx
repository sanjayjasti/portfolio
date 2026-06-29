"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code2,
    Heart,
    Rocket,
    Sparkles,
    Target,
    Zap,
} from "lucide-react";
import Image from "next/image";

const highlights = [
    {
        icon: Brain,
        title: "Machine Learning",
        description:
            "Building predictive models with LSTM neural networks and traditional ML algorithms, focusing on practical applications like stock price prediction.",
    },
    {
        icon: Heart,
        title: "Deep Learning",
        description:
            "Experience with TensorFlow, Keras, and deep learning architectures including LSTM and CNN for time series and pattern recognition tasks.",
    },
    {
        icon: Rocket,
        title: "Full-Stack Development",
        description:
            "Developing end-to-end applications using modern web technologies, from Flask backends to interactive JavaScript frontends.",
    },
    {
        icon: Code2,
        title: "Data Analytics",
        description:
            "Skilled in data transformation, visualization, and statistical analysis using Python, with experience in real-time data processing.",
    },
] as const;

const interests = [
    "Machine Learning",
    "Deep Learning (LSTM/CNN)",
    "Data Analytics",
    "Python Development",
    "Full-Stack Development",
    "Stock Prediction",
    "Real-Time Applications",
    "Problem Solving",
    "Competitive Programming",
];

const stats = [
    { label: "Focus", value: "AI systems" },
    { label: "Domain", value: "Healthcare" },
    { label: "Stack", value: "ML + Cloud" },
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-24 px-4 bg-section-alt">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_70%)] blur-3xl" />
                <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">About Me</h2>
                    <p className="text-text-tertiary max-w-2xl mx-auto">
                        A focused snapshot of my background, technical direction, and the kinds of systems I like to build.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] items-start">
                    {/* Left: Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,transparent_70%)] blur-2xl" />

                        <motion.div
                            whileHover={{ y: -5, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-glass-border bg-glass-bg shadow-2xl backdrop-blur-md"
                        >
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-55" />

                            <div className="relative aspect-[4/5] w-full max-h-[560px]">
                                <Image
                                    src="/assets/profile.png"
                                    alt="Jasti Sanjay"
                                    fill
                                    priority
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute inset-x-4 bottom-4 z-20">
                                <div className="rounded-2xl border border-glass-border bg-background/55 px-4 py-3 backdrop-blur-xl shadow-xl">
                                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                                        AI/ML Student
                                    </p>
                                    <p className="text-sm font-medium text-text-primary">Jasti Sanjay</p>
                                    <p className="mt-1 text-xs text-text-tertiary">
                                        B.Tech student building practical AI/ML solutions and full-stack applications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Story + focus + cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)]" />

                        <div className="relative space-y-6 rounded-[2rem] border border-glass-border bg-glass-bg p-6 md:p-8 shadow-2xl backdrop-blur-md">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-bg px-3 py-1 text-xs text-text-tertiary backdrop-blur-md">
                                    <Sparkles className="h-4 w-4 text-secondary" />
                                    Engineering curiosity into reliable AI products
                                </div>

                                <div className="space-y-4 max-w-3xl">
                                    <p className="text-lg leading-relaxed text-text-primary">
                                        I&apos;m <span className="font-semibold text-primary">Jasti Sanjay</span>, a B.Tech student specializing in{' '}
                                        <span className="text-secondary">Artificial Intelligence &amp; Machine Learning</span> at Vignan&apos;s Foundation for Science, Technology and Research.
                                    </p>
                                    <p className="leading-relaxed text-text-tertiary">
                                        With a strong foundation in <span className="text-primary">Python</span>, <span className="text-primary">Machine Learning</span>, and <span className="text-primary">Full-Stack Development</span>, I enjoy building practical solutions that solve real-world problems. My experience spans from developing LSTM-based stock prediction models to creating comprehensive real-time chat applications with modern web technologies.
                                    </p>
                                    <p className="leading-relaxed text-text-tertiary">
                                        I&apos;m passionate about transforming raw data into meaningful insights through visualization, statistical analysis, and machine learning. Currently maintaining a <span className="text-secondary">7.5 CGPA</span> while actively solving problems on LeetCode and participating in hackathons. Each project I build includes comprehensive documentation and follows industry best practices.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {[
                                    { label: "Focus", value: "AI/ML & Data" },
                                    { label: "Education", value: "B.Tech AIML" },
                                    { label: "Status", value: "Student" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.35, delay: index * 0.06 }}
                                        whileHover={{ y: -3 }}
                                        className="rounded-2xl border border-glass-border bg-card-bg/70 p-4 backdrop-blur-md"
                                    >
                                        <div className="text-xs uppercase tracking-[0.24em] text-text-tertiary">{item.label}</div>
                                        <div className="mt-1 text-sm font-medium text-text-primary">{item.value}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-secondary" />
                                    <span className="text-sm font-medium text-text-primary">Interests &amp; Focus Areas</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {interests.map((interest, index) => (
                                        <motion.span
                                            key={interest}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.25, delay: index * 0.04 }}
                                            whileHover={{ y: -2 }}
                                            className="rounded-full border border-glass-border bg-glass-bg px-3 py-1 text-sm text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                                        >
                                            {interest}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-glass-border bg-glass-bg p-6 shadow-2xl backdrop-blur-md">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_55%)]" />
                            <div className="relative mb-5 flex items-center gap-2">
                                <Target className="h-5 w-5 text-secondary" />
                                <h3 className="text-base font-semibold text-text-primary">What I Focus On</h3>
                            </div>

                            <div className="relative grid gap-4 sm:grid-cols-2">
                                {highlights.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.25 }}
                                            transition={{ duration: 0.45, delay: index * 0.08 }}
                                            whileHover={{ y: -5, scale: 1.01 }}
                                            className="group rounded-2xl border border-glass-border bg-glass-bg-subtle p-5 backdrop-blur-md transition-colors hover:border-primary/40"
                                        >
                                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border bg-primary/10 transition-colors group-hover:bg-primary/20">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <h4 className="mb-2 font-semibold text-text-primary">{item.title}</h4>
                                            <p className="text-sm leading-relaxed text-text-tertiary">{item.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block max-w-4xl rounded-[2rem] border border-glass-border bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 px-6 py-8 shadow-2xl backdrop-blur-md md:px-10">
                        <Target className="mx-auto mb-4 h-8 w-8 text-secondary" />
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-text-primary">
                            &quot;My goal is to build AI systems that are not just accurate, but also{' '}
                            <span className="text-primary">practical</span>,{' '}
                            <span className="text-secondary">user-friendly</span>, and{' '}
                            <span className="text-primary">impactful</span> — bridging the gap between data science and real-world applications.&quot;
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
