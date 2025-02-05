import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchUserPosts } from "../../utils/api";
import PostCard from "../../components/PostCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function UserPosts() {
  const router = useRouter();
  const { id } = router.query;
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUserPosts(id)
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
