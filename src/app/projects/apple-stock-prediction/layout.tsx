import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apple Stock Price Prediction — LSTM Deep Learning Model",
    description:
        "LSTM-based deep learning model for Apple stock price prediction using TensorFlow and Flask. Features real-time data from Yahoo Finance with interactive visualizations.",
    alternates: {
        canonical: "https://portfolio-sable-tau-b7ysjwnjns.vercel.app/projects/apple-stock-prediction",
    },
    openGraph: {
        title: "Apple Stock Price Prediction — LSTM Deep Learning Model",
        description:
            "Deep learning model using LSTM neural networks to predict Apple stock prices with Flask web interface and real-time Yahoo Finance data.",
        url: "https://portfolio-sable-tau-b7ysjwnjns.vercel.app/projects/apple-stock-prediction",
        type: "article",
    },
};

export default function AppleStockLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}