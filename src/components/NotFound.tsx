import { useNavigate } from "react-router-dom";
import { ReactComponent as FourOFourNotFound } from "./assets/notfound.svg";
import { ROUTE_PATHS } from "../utils/constants";
export const NotFoundPage = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(ROUTE_PATHS.HOME);
  };
  return (
    <>
      <div className="not_found_wrapper">
        <FourOFourNotFound />
      </div>
      <div className="not_found_message">
        This page doesn’t exist Please check your URL or return to Pokemon home
        page.
      </div>
      <div className="not_found_button">
        <button type="button" onClick={handleClick}>
          Home
        </button>
      </div>
    </>
  );
};
