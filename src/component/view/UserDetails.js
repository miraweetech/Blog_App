import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { requestDetailSuccessAction } from "../../redux/reducer/AuthorSlice";

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.author.details);

  useEffect(() => {
    dispatch(requestDetailSuccessAction(userId, detail));
  }, [dispatch, userId, detail]);

  console.log("detail", detail);

  if (!detail) return <p>Loading...</p>;

  const createdAtDate = detail.createdAtDate
    ? detail.createdAtDate
    : ["22/2/2013"];
  const createdAtTime = detail.createdAtTime
    ? detail.createdAtTime
    : ["22:11:60 : 400Z"];

  return (
    <div className="user-details">
      <div className="profile-container">
        <img src={detail.avatar} alt="User Avatar" />
        <h2>{detail.name}</h2>
        <p>ID: 34{detail.id}</p>
      </div>
      <div style={{textAlign: "center", padding: "10px"}}>
        <h3>Posted Date-Time Section</h3>
        <p>Created Post Date: {createdAtDate}</p>
        <p>Created Post Time: {createdAtTime}</p>
      </div>
    </div>
  );
};

export default UserDetails;
