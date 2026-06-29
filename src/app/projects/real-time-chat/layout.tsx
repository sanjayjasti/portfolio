import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real-Time Chat Application — Full-Stack Communication Platform",
    description:
        "A comprehensive real-time chat application built with React, Node.js, Socket.io, and MongoDB. Features user authentication, group chats, image sharing, and modern responsive UI.",
    alternates: {
        canonical: "https://portfolio-sable-tau-b7ysjwnjns.vercel.app/projects/real-time-chat",
    },
    openGraph: {
        title: "Real-Time Chat Application — Full-Stack Communication Platform",
        description:
            "Real-time messaging with Socket.io, JWT authentication, group chats, and image sharing built with React and Node.js.",
        url: "https://portfolio-sable-tau-b7ysjwnjns.vercel.app/projects/real-time-chat",
        type: "article",
    },
};

export default function ChatAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}