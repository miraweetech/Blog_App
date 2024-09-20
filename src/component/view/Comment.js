import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestDetailSuccessAction } from "../../redux/reducer/AuthorSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Comments = [
    { id: 34, text: "Good Post!", userId: 34, name: "Alyssa Sawayn MD" },
    { id: 22, text: "Very Nice Creativity...", userId: 22, name: "Lori Rowe" },
    {
      id: 45,
      text: "Very Nice Informative..",
      userId: 45,
      name: "Ernest Wolff",
    },
  ];

  const handleUserClick = (id, userId, name) => {
    dispatch(requestDetailSuccessAction(id, userId, name));
    navigate(`/comment/${userId}`);
  };

  useEffect(() => {
    dispatch(requestDetailSuccessAction());
  }, [dispatch]);

  console.log("comment", Comments);

  return (
    <>
      <div className="comment-section">
        <h3>Comment</h3>
        {Comments.map((comment) => (
          <div className="comment">
            <p>Comment: {comment.text}</p>
            <p>
              User:
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() =>
                  handleUserClick(comment.id, comment.userId, comment.name)
                }
              >
                {comment.userId}
                <p>{comment.name}</p>
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comment;
