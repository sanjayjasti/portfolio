"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, Github, TrendingUp, Brain, BarChart3, Database,
    Server, Globe, LayoutDashboard, Terminal, Zap, CheckCircle, 
    Settings, Code2, LineChart, Activity, Target, Clock,
    Layers, Eye, Download, Calendar
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectStats from "@/components/ProjectStats";

const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "features", label: "Features", icon: TrendingUp },
    { id: "architecture", label: "Model & Tech", icon: Brain },
    { id: "installation", label: "Setup Guide", icon: Settings },
    { id: "usage", label: "Usage & API", icon: Code2 },
];

const keyStats = [
    { value: "LSTM", label: "Neural Network", icon: Brain },
    { value: "60-Day", label: "Sequence Length", icon: Calendar },
    { value: "Real-Time", label: "Yahoo Finance Data", icon: Activity },
    { value: "Flask", label: "Web Interface", icon: Globe },
];

const techStack = {
    deepLearning: ["TensorFlow", "Keras", "LSTM Networks", "NumPy", "Scikit-learn"],
    backend: ["Python", "Flask", "Pandas", "MinMaxScaler"],
    frontend: ["HTML/CSS", "JavaScript", "Matplotlib"],
    data: ["Yahoo Finance API", "yfinance", "2-year Historical Data"]
};
// Overview Tab
function OverviewTab() {
    return (
        <div className="space-y-8">
            <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <TrendingUp className="text-primary" /> Project Vision
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                    This project predicts the next day's Apple stock price using a Long Short-Term Memory (LSTM) neural network. 
                    Live stock market data is fetched from Yahoo Finance and processed to generate future price predictions 
                    with interactive visualizations through a Flask web application.
                </p>
            </section>

            {/* Model Overview */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Brain className="text-secondary" /> LSTM Model Architecture
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">60-Day</div>
                        <div className="text-xs text-text-tertiary">Sequence Length</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">LSTM</div>
                        <div className="text-xs text-text-tertiary">Neural Network</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-500/10 rounded-xl border border-green-500/20">
                        <Activity className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Real-Time</div>
                        <div className="text-xs text-text-tertiary">Yahoo Finance</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <Target className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-text-primary">Next-Day</div>
                        <div className="text-xs text-text-tertiary">Prediction</div>
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
                            <h3 className="text-sm font-bold text-primary mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
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
        { icon: Activity, title: "Live Stock Data", desc: "Real-time Apple stock data from Yahoo Finance (2-year historical)" },
        { icon: Brain, title: "LSTM Prediction", desc: "Next-day stock price prediction with 60-day sequence modeling" },
        { icon: Globe, title: "Interactive Web Interface", desc: "Flask web application with real-time predictions" },
        { icon: BarChart3, title: "Visual Analytics", desc: "Actual vs Predicted stock price visualization with matplotlib" },
        { icon: TrendingUp, title: "Direction Indicator", desc: "📈 Up / 📉 Down indicators for predicted price movement" },
        { icon: Database, title: "Recent Data Table", desc: "30-day data showing actual vs predicted comparisons" },
    ];

    const technicalFeatures = [
        { icon: Zap, title: "MinMaxScaler Normalization", desc: "Data preprocessing for better model performance" },
        { icon: Clock, title: "Real-Time Updates", desc: "Predictions updated on each page refresh" },
        { icon: LineChart, title: "Matplotlib Graphs", desc: "Interactive charts and visualizations" },
        { icon: Target, title: "Sequence Learning", desc: "60-day pattern recognition for predictions" },
    ];

    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <TrendingUp className="text-primary" /> Core Features
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
                    <Layers className="text-secondary" /> Project Structure
                </h2>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono">
{`apple-stock-price-prediction/
│
├── app.py                 # Main Flask application
├── model.keras           # Pre-trained LSTM model
├── scaler.pkl           # MinMaxScaler for data normalization
├── requirements.txt     # Project dependencies
├── runtime.txt         # Python version specification
├── prediction.png      # Sample prediction visualization
│
├── static/             # Static web assets
│   ├── style.css      # Application styling
│   ├── script.js      # JavaScript functionality
│   └── *.png          # Generated charts and graphs
│
└── templates/          # HTML templates
    └── index.html     # Main web interface`}
                    </pre>
                </div>
            </section>

            {/* Model Architecture */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Brain className="text-primary" /> LSTM Model Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-text-primary mb-4">Model Architecture</h3>
                        <ul className="space-y-2 text-text-secondary">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <strong>Sequence length:</strong> 60 days of historical data
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <strong>Input features:</strong> Close price (MinMaxScaler normalized)
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <strong>Model type:</strong> Sequential LSTM network
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <strong>Output:</strong> Next-day stock price prediction
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-text-primary mb-4">Performance Features</h3>
                        <ul className="space-y-2 text-text-secondary">
                            <li className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                Uses 60-day sequences for pattern recognition
                            </li>
                            <li className="flex items-center gap-2">
                                <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                Processes 2 years of historical data
                            </li>
                            <li className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                Real-time predictions on page refresh
                            </li>
                            <li className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                MinMaxScaler for normalized performance
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Data Flow */}
            <section className="bg-card-bg border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Activity className="text-green-600 dark:text-green-400" /> Data Flow Process
                </h2>
                <div className="grid grid-cols-5 gap-3">
                    {[
                        { step: "1", name: "FETCH", desc: "Yahoo Finance API", color: "blue" },
                        { step: "2", name: "PREPROCESS", desc: "MinMaxScaler", color: "purple" },
                        { step: "3", name: "SEQUENCE", desc: "60-Day Windows", color: "yellow" },
                        { step: "4", name: "PREDICT", desc: "LSTM Model", color: "green" },
                        { step: "5", name: "VISUALIZE", desc: "Flask + Charts", color: "teal" },
                    ].map((flow) => (
                        <div key={flow.step} className={`p-3 rounded-lg bg-${flow.color}-500/20 border border-${flow.color}-500/30 text-center`}>
                            <div className={`text-${flow.color}-400 font-bold text-lg`}>{flow.step}</div>
                            <div className="text-xs text-text-primary font-medium">{flow.name}</div>
                            <div className="text-xs text-text-tertiary">{flow.desc}</div>
                        </div>
                    ))}
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
                    <Settings className="text-primary" /> Installation & Setup
                </h2>
                <p className="text-text-secondary leading-relaxed">
                    Follow these steps to set up the Apple Stock Price Prediction application on your local machine.
                </p>
            </section>

            {/* Prerequisites */}
            <section className="bg-card-bg border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">📋 Prerequisites</h3>
                <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        Python 3.8 or higher
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        pip package manager
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
cd apple-stock-price-prediction-main`}
                    </pre>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">2. Create virtual environment (recommended)</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`python -m venv .venv`}
                    </pre>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">3. Activate virtual environment</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`# Windows
.venv\\Scripts\\activate

# macOS/Linux
source .venv/bin/activate`}
                    </pre>
                </div>

                {/* Step 4 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">4. Install dependencies</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`pip install -r requirements.txt`}
                    </pre>
                </div>

                {/* Step 5 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">5. Run the application</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`python app.py`}
                    </pre>
                </div>

                {/* Step 6 */}
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="text-primary font-bold mb-2">6. Access the application</h4>
                    <pre className="text-green-400 text-sm font-mono">
{`Open browser: http://localhost:5000`}
                    </pre>
                </div>
            </section>

            {/* Dependencies */}
            <section className="bg-card-bg border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">📦 Dependencies</h3>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm font-mono">
{`Flask==3.1.0
tensorflow==2.20.0
numpy==2.4.6
pandas==3.0.3
matplotlib==3.10.0
scikit-learn==1.6.1
yfinance==0.2.65
keras==3.13.2
gunicorn`}
                    </pre>
                </div>
            </section>
        </div>
    );
}
// Usage Tab
function UsageTab() {
    const usageSteps = [
        { step: "1", title: "Launch the application", desc: "Follow installation steps above" },
        { step: "2", title: "View current Apple stock price", desc: "Main dashboard shows real-time data" },
        { step: "3", title: "See next-day prediction", desc: "With direction indicator (📈/📉)" },
        { step: "4", title: "Analyze prediction graph", desc: "Actual vs predicted prices visualization" },
        { step: "5", title: "Review recent performance", desc: "30-day data table comparison" },
    ];

    return (
        <div className="space-y-8">
            <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <Eye className="text-primary" /> How to Use
                </h2>
                <p className="text-text-secondary leading-relaxed">
                    Simple steps to get predictions and analyze Apple stock price trends using the LSTM model.
                </p>
            </section>

            {/* Usage Steps */}
            <section className="space-y-4">
                {usageSteps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-4 bg-card-bg border border-border rounded-xl hover:border-primary/30 transition-colors"
                    >
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary mb-1">{step.title}</h3>
                            <p className="text-sm text-text-tertiary">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* API Endpoint */}
            <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Code2 className="text-primary" /> API Endpoints
                </h2>
                <div className="bg-card-bg border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <span className="px-2 py-1 text-xs font-bold rounded bg-green-500/20 text-green-400">
                            GET
                        </span>
                        <code className="font-mono text-text-primary">/</code>
                        <span className="text-text-tertiary text-sm">Main dashboard with predictions and visualizations</span>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    ⚠️ Important Disclaimer
                </h3>
                <p className="text-text-secondary">
                    <strong>Educational Purpose Only:</strong> This application is for educational and research purposes only. 
                    Stock price predictions are inherently uncertain and should not be used as the sole basis for investment decisions.
                </p>
            </section>

            {/* Future Enhancements */}
            <section className="bg-card-bg border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    🔮 Future Enhancements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Multiple stock ticker support",
                        "Extended prediction horizons (weekly/monthly)",
                        "Additional technical indicators",
                        "Model comparison dashboard",
                        "User authentication and portfolio tracking",
                        "Deployment ready with Gunicorn"
                    ].map((enhancement, i) => (
                        <div key={i} className="flex items-center gap-2 text-text-secondary">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {enhancement}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default function AppleStockProject() {
    const [activeTab, setActiveTab] = useState("overview");

    const router = useRouter();

    const renderTabContent = () => {
        switch (activeTab) {
            case "overview": return <OverviewTab />;
            case "features": return <FeaturesTab />;
            case "architecture": return <ArchitectureTab />;
            case "installation": return <InstallationTab />;
            case "usage": return <UsageTab />;
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
                                <span className="text-4xl">📈</span>
                                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-primary bg-clip-text text-transparent">
                                    Apple Stock Prediction
                                </h1>
                            </div>
                            <p className="text-xl text-secondary font-mono mb-6">
                                LSTM Deep Learning for Financial Forecasting
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
                                href="https://github.com/sanjayjasti18/apple-stock-prediction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-card-bg-hover hover:bg-black/5 dark:hover:bg-white/20 border border-border rounded-lg transition-colors"
                            >
                                <Github className="w-5 h-5" /> View on GitHub
                            </a>

                            <ProjectStats slug="apple-stock-prediction" />
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