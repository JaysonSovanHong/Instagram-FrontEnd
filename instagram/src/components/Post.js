import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Comment from "../pages/Comment";
import { UserContext } from "../Context/UserContext";

const Post = ({ post }) => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const [comments, setComments] = useState([]);
  const allComments = async () => {
    const singleComments = await axios.post(
      `${process.env.REACT_APP_BURL}/comment/post`,
      {
        postId: post.id,
      }
    );

    setComments(singleComments.data.allComment);
  };
  useEffect(allComments, []);

  return (
    <div>
      <div id="timelineMain">
        <div id="timeline1">
          <p> {post.user.name}</p>
          <img src={post.user.image} width="50px" alt="user profile"></img>
        </div>

        <div id="timeline2">
          <Link to={`/post`}>
            <img src={post.image} width="200px" alt="user profile"></img>
          </Link>

          <p>{post.description}</p>
        </div>
      </div>
      <div id="commentSection">
        {comments.map((com, c) => {
          return (
            <div id="comment1">
              <div key={c}>
                <span>{user.name}</span>
                <img src={user.image} width="50px"></img>
              </div>
              <div>{com.description}</div>
            </div>
          );
        })}
      </div>
      <Comment allComments={allComments} post={post} />
    </div>
  );
};

export default Post;
