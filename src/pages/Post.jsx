import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../posts";


export default function Post() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);
    if (!post) return <p className="text-gray-400">Post not found.</p>;


    return (
        <article className="prose prose-invert max-w-none bg-gray-800 p-6 rounded-xl shadow-md">
            <h1 className="text-3xl text-indigo-400 font-bold mb-4">{post.title}</h1>
            <p className="text-gray-400 mb-4">{post.date}</p>
            <ReactMarkdown className="text-gray-200 leading-relaxed">{post.content}</ReactMarkdown>
        </article>
    );
}