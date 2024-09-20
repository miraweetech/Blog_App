import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAuthor } from "../../redux/reducer/AuthorSlice";

const Profile = () => {
  const { details: singleData } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      dispatch(fetchAuthor(singleData));
    }
  }, [dispatch, singleData, userId]);

  const handlePostClick = (postId) => {
    dispatch(fetchAuthor(postId));
    navigate(`/post/${postId.id}`);
  };

  const handlePost1Click = (postId) => {
    dispatch(fetchAuthor(postId));
    navigate(`/post1/${postId.id}`);
  };

  const handlePost2Click = (postId) => {
    dispatch(fetchAuthor(postId));
    navigate(`/post2/${postId.id}`);
  };

  console.log("singleData", singleData);

  if (!singleData) {
    return <p>No user details available</p>;
  }

  return (
    <>
      <div className="profile-container">
        <img src={singleData.avatar} alt="jhon" />
        <h2 style={{ padding: "10px 0" }}>{singleData.name}</h2>
        <p>{singleData.id}</p>
        <p>POSTS : 4</p>
        <p>LIKES: 10</p>
      </div>

      <div className="post-container">
        <h3>Posts</h3>
        <div className="row text-white">
          <div className="col-sm p-3">Assending by date</div>
          <div className="col-sm p-3">Decending by date</div>
          <div className="col-sm p-3">Assending by Like</div>
          <div className="col-sm p-3">decending by Like</div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12">
            <button
              className="button-row"
              onClick={(e) => {
                e.preventDefault();
                handlePostClick({
                  id: 1,
                  title: `post 1`,
                  likes: 5,
                });
              }}
            >
              <span className="button-text">Kansas</span>
              <span className="button-date">12/07/2019</span>
              <span className="button-likes">likes 5</span>
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12">
            <button
              className="button-row"
              onClick={(e) => {
                e.preventDefault();
                handlePost1Click({
                  id: 2,
                  title: `post 2`,
                  likes: 6,
                });
              }}
            >
              <span className="button-text">Savings Account</span>
              <span className="button-date">27/04/2020</span>
              <span className="button-likes">likes 6</span>
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12">
            <button
              className="button-row"
              onClick={(e) => {
                e.preventDefault();
                handlePost2Click({
                  id: 3,
                  title: `post 3`,
                  likes: 3,
                });
              }}
            >
              <span className="button-text">website</span>
              <span className="button-date">18/11/2019</span>
              <span className="button-likes">likes 3</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
