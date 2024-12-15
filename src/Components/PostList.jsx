import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext, PostContextProvider } from "../contexts/PostsContext";

export default function PostList() {
  const { posts } = useContext(PostContext);
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
            {Array.isArray(posts) &&
              posts.map((post) => (
                <tr key={post.id}>
                  <th scope="row">
                    <img className="rounded" src={post.img} width={80} />
                  </th>
                  <td scope="row">{post.title}</td>
                  <td scope="row">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge text-bg-secondary me-1"
                      >
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
