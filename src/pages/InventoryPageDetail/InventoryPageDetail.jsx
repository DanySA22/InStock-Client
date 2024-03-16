import { NavLink } from "react-router-dom";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import editpen from "../../assets/Icons/edit-24px.svg"
const InventoryPageDetail = () => {
  return (
    <>     
     <section className="edit-whsheader">
        <div className="edit-whsheader__container">    
        <NavLink to="/inventory" className="edit-whsheader__arrow-back">
          <img
            src={arrowIcon}
            alt="Go back"
            className="edit-whsheader__buttonicon"
          />
        </NavLink>
        <div className="edit-whsheader__title">Television</div>
        </div>
        <NavLink to="/inventory" className="edit-whsheader__edit-pen">
          <img
            src={editpen}
            alt="Go back"
            className="edit-whsheader__penicon"
          />
        </NavLink>
      </section>
    </>
  );
};
export default InventoryPageDetail;
