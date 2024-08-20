import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <Link to="react-shop/" className="clickAnimation">
        <h1 className="text-center"> This page doesn't exist. Go to home. <br/> Этой страницы не существует. Вернутьcя на главную.</h1>
      </Link>
    </div>
  );
};

export default NotFoundPage;
