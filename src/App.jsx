import { useEffect, useState } from 'react';
import { fetchPosts, createPost } from './api';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(newPost)
      .then((res) => setPosts([...posts, res.data]))
      .catch((err) => console.error('Error creating post:', err));
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Pukeko Social Media 🚀</h1>

      <form onSubmit={handleSubmit} className="my-5">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Post Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
          className="border p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Post</button>
      </form>

      <h2 className="mt-5 text-2xl">Posts:</h2>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 m-2">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
