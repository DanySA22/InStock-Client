import arrowIcon from "../../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useNavigate } from "react-router-dom";

const EditWareHouseHeader = ({ title, warehouseId }) => {
  const navigate = useNavigate();

  const handleBackButtonClicked = () => {
    navigate(-1);
  };
  return (
    <section className="edit-whsheader">
      <div
        className="edit-whsheader__arrow-back"
        onClick={handleBackButtonClicked}
      >
        <img
          src={arrowIcon}
          alt="Go back"
          className="edit-whsheader__buttonicon"
        />
      </div>
      <div className="edit-whsheader__title">{title}</div>
    </section>
  );
};
export default EditWareHouseHeader;
