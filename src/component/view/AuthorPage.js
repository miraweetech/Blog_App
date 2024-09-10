import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAuthor,
  requestDetailSuccessAction,
} from "../../redux/reducer/AuthorSlice";

const AuthorPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.author);

  useEffect(() => {
    dispatch(fetchAuthor());
  }, [dispatch]);

  const handleDetailSuccess = (user) => {
    dispatch(requestDetailSuccessAction(user));
    navigate(`/profile/${user.id}`);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="authors-grid">
        {data &&
          data.map((user) => (
            <div
              className="authorPage-container"
              key={user.id}
              onClick={(e) => {
                e.preventDefault();
                handleDetailSuccess(user);
              }}
            >
              <img src={user.avatar} alt='' />
              <p>{user.name}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDetailSuccess(user);
                }}
              >
                Click to view Profile
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AuthorPage;
