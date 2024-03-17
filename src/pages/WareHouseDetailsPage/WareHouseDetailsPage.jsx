import React, { useState, useEffect } from "react";
import { useParams, NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import WareHouseDetailsSubMenu from "../../components/WareHouseDetails/WareHouseDetailsSubMenu";
import "./WareHouseDetailsPage";
import DeleteWareHousePopup from "../../components/WareHouseList/DeleteWareHouse/DeleteWareHouse";
import StockStatus from "../../components/InventoryList/InventoryListSelection/StockStatus";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";

function WareHouseDetailsPage() {
  //Retrieve one warehouse data and the related items

  const [warehouse, setWarehouse] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { id } = useParams(); //This basically collect the id that comes from the Link when we click the specific warehouse
  console.log(id);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const handleDeleteButtonClicked = async (relatedItem) => {
    console.log("delete button clicked");
    setSelectedItem(relatedItem);
    console.log(relatedItem);
    console.log(selectedItem);
    togglePopup();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/items/${selectedItem.id}`);
      console.log("inventory deleted successfully");
      togglePopup();
      displayOneWarehouseAndRelatedItems();

      // Optionally update your state or UI after successful deletion
    } catch (error) {
      console.error("Error deleting warehouse:", error);
    }
  };
  const displayOneWarehouseAndRelatedItems = async () => {
    const warehousesOne = await axios.get(
      `http://localhost:8080/warehouses/${id}`
    );
    console.log(warehousesOne.data);
    setWarehouse(warehousesOne.data);

    const relatedItems = await axios.get(
      `http://localhost:8080/warehouses/${id}/inventories`
    );
    console.log(relatedItems.data);
    setRelatedItems(relatedItems.data);
  };

  useEffect(() => {
    displayOneWarehouseAndRelatedItems();
  }, []); //it will be used on first page render

  //We can use warehouse here now to extract the data (like name, street, etc) of that particular warehouse
  //We can use relatedItems to display the list(map) of all the related items for that warehouse
  const listRelatedInventories = relatedItems.map((relatedItem) => {
    const instock = relatedItem.status === "In Stock";
    return (
      <div className="related-items-list-selection" key={relatedItem.id}>
        <div className="related-items-list-selection__container">
          <div className="related-items-list-selection__subcontainer related-items-list-selection__subcontainer--item">
            <h4 className="related-items-list-selection__title">
              INVENTORY ITEM
            </h4>
            <NavLink
              className="related-items-list-selection__link"
              to={`/inventory/inventorydetails/${relatedItem.item}`}
            >
              <button className="related-items-list-selection__button">
                {relatedItem.item_name}
              </button>
              <button className="related-items-list-selection__icon">.</button>
            </NavLink>
          </div>
          <div className="related-items-list-selection__subcontainer related-items-list-selection__subcontainer--category">
            <h4 className="related-items-list-selection__title related-items-list-selection__title--category">
              CATEGORY
            </h4>
            <p className="related-items-list-selection__info related-items-list-selection__info--category">
              {relatedItem.category}
            </p>
          </div>
        </div>
        <div className="related-items-list-selection__container related-items-list-selection__container--qty">
        <div className="related-items-list-selection__subcontainer related-items-list-selection__subcontainer--status">
            <h4 className="related-items-list-selection__title">STATUS</h4>
            <StockStatus
              instock={instock}
              className="related-items-list-selection__info related-items-list-selection__info--name related-items-list-selection__info--status"
            >
              {relatedItem.status}
            </StockStatus>
          </div>
          <div className="related-items-list-selection__subcontainer related-items-list-selection__subcontainer--qty">
            <h4 className="related-items-list-selection__title related-items-list-selection__info--qty">
              QTY
            </h4>
            <p className="related-items-list-selection__info related-items-list-selection__info--qty">
              {relatedItem.quantity}
            </p>
          </div>
        </div>
        <div className="related-items-list-selection__action">
          <button
            className="related-items-list-selection__delete"
            onClick={() => handleDeleteButtonClicked(relatedItem)}
          >
            d
          </button>
          <Link
            className="related-items-list-selection__link"
            to={`/inventory/editInventory/${relatedItem.id}`}
          >
            <button className="related-items-list-selection__edit">e</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="ware-house-details-page">
      <header className="warehouse-details-menu">
        <div className="warehouse-details-menu__container--details">
          <NavLink to="/" className="edit-whsheader__arrow-back">
            <img
              src={arrowIcon}
              alt="Go back"
              className="edit-whsheader__buttonicon"
            />
          </NavLink>
          <h1 className="warehouse-details-menu__header">
            {warehouse.warehouse_name}
          </h1>
        </div>

        <form className="warehouse-details-menu__form">
          <div className="warehouse-details-menu__container">
            <NavLink
              className="warehouse-details-menu__link"
              to={`/editWareHouse/${warehouse.id}`}
            >
              <button className="warehouse-details-menu__button" type="submit">
                Edit
              </button>
            </NavLink>
          </div>
        </form>
      </header>
      <div className="warehouseDetails">
        <div className="warehouseDetails__container">
          <div className="warehouseDetails__address">
            <h4 className="warehouseDetails__subtitle warehouseDetails__subtitle--row">
              {" "}
              WAREHOUSE ADDRESS:{" "}
            </h4>
            <p> {warehouse.address} </p>
            <p>
              {" "}
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
        </div>
        <div className="warehouseDetails__container warehouseDetails__container--row">
          <div className="warehouseDetails__contactName">
            <h4 className="warehouseDetails__subtitle"> CONTACT NAME: </h4>
            <p> {warehouse.contact_name} </p>
            <p> {warehouse.contact_position}</p>
          </div>
          <div className="warehouseDetails__contactInformation">
            <h4 className="warehouseDetails__subtitle">
              {" "}
              CONTACT INFORMATION:{" "}
            </h4>
            <p className="wareDetails__text"> {warehouse.contact_phone} </p>
            <p> {warehouse.contact_email}</p>
          </div>
        </div>
      </div>
      <WareHouseDetailsSubMenu
        a={"INVENTORY ITEM"}
        b={"CATEGORY"}
        c={"STATUS"}
        d={"QTY"}
        e={"WAREHOUSE"}
        f={"ACTIONS"}
      />
      {listRelatedInventories}
      {/* <div>warehouse Details  2</div> */}
      <DeleteWareHousePopup isOpen={isPopupOpen} onClose={togglePopup}>
        <div className="ware-house-list-selection__popup">
          <h1 className="ware-house-list-selection__header">
            Delete {selectedItem.item_name} warehouse?
          </h1>
          <p className="ware-house-list-selection__text">
            {" "}
            Please confirm that you'd like to delete the{" "}
            {selectedItem.item_name} warehouse from the list of warehouses. you
            won't be able to undo this action
          </p>
          <div className="ware-house-list-selection__box">
            <button
              className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--cancel"
              onClick={togglePopup}
            >
              cancel
            </button>
            <button
              className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--delete"
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
        </div>
      </DeleteWareHousePopup>
    </div>
  );
}
export default WareHouseDetailsPage;
