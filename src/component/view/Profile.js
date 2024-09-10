import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { details: singleData } = useSelector((state) => state.author);

  if (!singleData) {
    return <p>No user details available</p>;
  }

  return (
    <>
      <div className="profile-container">
        <img src={singleData.avatar} alt="jhon" />
        <h2 style={{ padding: "10px 0" }}>{singleData.name}</h2>
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
      </div>
    </>
  );
};

export default Profile;
