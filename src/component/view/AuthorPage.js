import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuthor, requestDetailSuccessAction } from "../../redux/reducer/AuthorSlice";

const AuthorPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading} = useSelector((state) => state.author);

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
      {data && data.map((user) => (
        <div key={user.id} onClick={(e) => {
            e.preventDefault();
            handleDetailSuccess(user);
        }}>
          <img src={user.avatar} alt={`${user.name}`} />
          <p>Name: {user.name}</p>
         <button onClick={(e) => {
            e.preventDefault()
            handleDetailSuccess(user)
         }}>Click to view Profile</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorPage;
