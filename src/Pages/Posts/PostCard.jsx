import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostShow() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const postId = useParams().id;
  const [postShow, setPostShow] = useState([]);

  useEffect(() => {
    const url = `${apiUrl}/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPostShow(data);
        console.log(url);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Dettaglio Post {postShow.id}</h1>
        <div className="card mt-5 mb-5 w-50">
          <img src={postShow.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{postShow.title}</h5>
            <p className="card-text">{postShow.content}</p>
            {Array.isArray(postShow.tags) &&
              postShow.tags.map((tag, index) => (
                <span className="badge text-bg-secondary me-1" key={index}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
