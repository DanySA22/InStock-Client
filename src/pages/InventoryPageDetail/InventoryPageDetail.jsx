import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import editpen from "../../assets/Icons/edit-25px.svg";
import StockStatus from "../../components/InventoryList/InventoryListSelection/StockStatus";

const InventoryPageDetail = () => {
  const { id: invid } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState(null);
  

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      const url = `http://localhost:8080/items/${invid}`;
      try {
        const response = await axios.get(url);
        setInventoryDetails(response.data); // Assuming the data is the item object itself
        console.log("Items list:", response.data);
      } catch (error) {
        console.log("cannot get inventory details", error);
      }
    };
    fetchInventoryDetails();
  }, [invid]);

  if (!inventoryDetails) return <div>Loading...</div>;
  const instock = inventoryDetails.status === "In Stock";
  return (
    <>
      <section className="edit-whsheader">
        <div className="edit-whsheader__container">
          <NavLink to={`/wareHouseDetails/${invid}`} className="edit-whsheader__arrow-back">
            <img
              src={arrowIcon}
              alt="Go back"
              className="edit-whsheader__buttonicon"
            />
          </NavLink>
          <div className="edit-whsheader__title">
            {inventoryDetails.item_name}
          </div>
        </div>
        <NavLink to={`/inventory/editInventory/${invid}`} className="edit-whsheader__arrow-back">
        <button className="edit-whsheader__edit-button-one">
          <img src={editpen} alt="Edit" className="edit-whsheader__penicon" />
        </button>

        <button className="edit-whsheader__edit-button">
          <img src={editpen} alt="Edit" className="edit-whsheader__penicon" />
          Edit
        </button>
        </NavLink>
      </section>
      <div className="product-card">
        <div className="product-card__description-container product-card__description-container--warehouse-details">
          <div className="product-card__description">
            <div className="product-card__title">DESCRIPTION:</div>
            <div className="product-card__text">
              {inventoryDetails.description}
            </div>
          </div>
          <div className="product-card__category">
            <div className="product-card__title">CATEGORY:</div>
            <div className="product-card__text">
              {" "}
              {inventoryDetails.category}
            </div>
          </div>
        </div>

        <div className="product-card__divide"></div>

        <div className="product-card__description-container">
          <div className="product-card__statusquan">
            <div className="product-card__status">
              <div className="product-card__title">STATUS:</div>
              <StockStatus className="product-card__text" instock={instock}>
                {" "}
                {inventoryDetails.status}
              </StockStatus>
            </div>
            <div className="product-card__quantity">
              <div className="product-card__title">QUANTITY:</div>
              <div className="product-card__text">
                {" "}
                {inventoryDetails.quantity}
              </div>
            </div>
          </div>
          <div className="product-card__warehouse">
            <div className="product-card__title">WAREHOUSE:</div>
            <div className="product-card__text">
              {" "}
              {inventoryDetails.warehouse_name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPageDetail;
