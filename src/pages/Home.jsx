import { Link } from "react-router-dom";
import posts from "../posts";


export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">Latest Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.id} className="p-5 bg-gray-800 rounded-xl hover:border-indigo-400 hover:shadow-xl border border-gray-700 transition-all duration-200">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-300 mb-3">{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="text-indigo-400 hover:underline font-medium">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}