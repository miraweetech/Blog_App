import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAuthor, setPage } from "../../redux/reducer/AuthorSlice";

const Buttons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pageNum } = useParams();
  const page = Number(pageNum) || 1;

  useEffect(() => {
    dispatch(setPage(page));
    dispatch(fetchAuthor(page));
  }, [dispatch, page]);

  const handlePageChange = (pageNum) => {
    navigate(`/page/${pageNum}`);
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const totalPages = 30;

  return (
    <>
      <div className="container mt-3">
        <ul className="pagination justify-content-center">
          <li className={`${page === 1 ? "disabled" : ""}`}>
            <button onClick={handlePreviousPage}>
              Previous
            </button>
          </li>

          <li className="page-item bg-dark">
            <span className="page-link">{page}</span>
          </li>

          <li className={`${page === totalPages ? "disabled" : ""}`}>
            <button onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
