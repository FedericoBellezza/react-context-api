import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data.posts);
      });
  }, []);
  console.log(posts);

  return (
    <>
      <div className="container mt-5">
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Immagine</th>
              <th scope="col">Nome</th>
              <th scope="col">Tags</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th scope="row">
                  <img className="rounded" src={post.img} width={80} />
                </th>
                <td scope="row">{post.title}</td>
                <td scope="row">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="badge text-bg-secondary me-1">
                      {tag}
                    </span>
                  ))}
                </td>
                <td>
                  <Link to={`/posts/${post.id}`} className="btn p-0">
                    <i className="text-bg-secondary fa-solid fa-eye p-3 ms-1 rounded"></i>
                  </Link>
                  <button className="btn p-0">
                    <i className="text-bg-primary fa-solid fa-pen p-3 ms-1 rounded"></i>
                  </button>
                  <button className="btn p-0">
                    <i className="text-bg-danger fa-solid fa-trash p-3 ms-1 rounded"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
