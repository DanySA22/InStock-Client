import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import DeleteWareHousePopup from "../DeleteWareHouse/DeleteWareHouse";

function WareHouseListSelection() {
  //useState is initialized with false to indicate pop up is closed. 
  const [isPopupOpen, setPopupOpen] = useState(false);
  // toggle function toggeles the isPopupOpen State
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="ware-house-list-selection">
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">WAREHOUSE</h4>
            <NavLink
              className="ware-house-list-selection__link"
              to="/wareHouseDetails"
            >
              <button className="ware-house-list-selection__button">
                Manhattan
              </button>
              <button className="ware-house-list-selection__icon">.</button>
            </NavLink>
          </div>
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">ADDRESS</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--address">
              503 Broadway, New York, USA
            </p>
          </div>
        </div>
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">CONTACT NAME</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--name">
              Parmin Aujla
            </p>
          </div>
          <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
            <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">
              CONTACT INFORMATION
            </h4>
            <p className="ware-house-list-selection__info">
              +1 (629) 555-0129 paujla@instock.com
            </p>
          </div>
        </div>
        <div className="ware-house-list-selection__action">
          <button
            className="ware-house-list-selection__delete"
            onClick={togglePopup}
          >
            d
          </button>
          <NavLink
            className="ware-house-list-selection__link"
            to="/editWareHouse"
          >
            <button className="ware-house-list-selection__edit">e</button>
          </NavLink>
        </div>
      </div>
      <DeleteWareHousePopup isOpen={isPopupOpen} onClose={togglePopup}>
        <div class="ware-house-list-selection__popup">
          <h1 className="ware-house-list-selection__header">
            Delete Washington warehouse?
          </h1>
          <p className="ware-house-list-selection__text">
            {" "}
            Please confirm that you'd like to delete the Washington warehouse
            from the list of warehouses. you won't be able to undo this action
          </p>
          <div className="ware-house-list-selection__box">
            <button
              className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--cancel"
              onClick={togglePopup}
            >
              cancel
            </button>
            <form className="delete">
            <button className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--delete">
              delete
            </button>
            </form>
          </div>
        </div>
      </DeleteWareHousePopup>
    </>
  );
}

export default WareHouseListSelection;
