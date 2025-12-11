import { useState, useEffect } from "react";
import staticPosts from "../data/posts.json";
import type { CommunityPost } from "../types/types";

const Community = () => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("posts") || "[]") as CommunityPost[];

        const combined = [
            ...saved,
            ...(staticPosts as CommunityPost[]).filter(
                (sp) => !saved.some((s) => s.id === sp.id)
            ),
        ];

        setPosts(combined);
    }, []);

    const addPost = () => {
        if (!message.trim()) return;

        if (posts.some((p) => p.message === message.trim())) return;

        const newPost: CommunityPost = {
            id: Date.now(),
            username: "Guest",
            message: message.trim(),
            timestamp: new Date().toLocaleString(),
        };

        const updated = [...posts, newPost];
        setPosts(updated);
        localStorage.setItem("posts", JSON.stringify(updated));
        setMessage("");
    };

    return (
        <div className="page-container">
            <div className="community-container">
                <h1>Community</h1>

                <textarea
                    placeholder="Typ je bericht..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button onClick={addPost}>Plaats</button>

                <h2>Berichten</h2>

                {posts.map((p) => (
                    <div key={p.id} className="post">
                        <strong>{p.username}</strong> — {p.timestamp}
                        <p>{p.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
