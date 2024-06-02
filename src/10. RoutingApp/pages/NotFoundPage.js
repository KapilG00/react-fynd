import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <h3>404 : Page not found !!</h3>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home page
      </button>
    </>
  );
}

export default NotFoundPage;
