export default function PostCard({ post }) {
    return (
      <div className="p-4 border rounded shadow-md mb-2">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
  