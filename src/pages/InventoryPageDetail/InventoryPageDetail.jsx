import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import editpen from "../../assets/Icons/edit-25px.svg";
import StockStatus from "../../components/InventoryList/InventoryListSelection/StockStatus";

const InventoryPageDetail = () => {
  const { id} = useParams();
  const [inventoryDetails, setInventoryDetails] = useState([]);
  useEffect(() => {
    const fetchInventoryDetails = async () => {
      const url = `http://localhost:8080/items/${id}`;
      try {
        const response = await axios.get(url);
        setInventoryDetails(response.data); 
      } catch (error) {
        console.log("cannot get inventory details", error);
      }
    };
    fetchInventoryDetails();
  }, [id]);
  const navigate = useNavigate();
  const handleBackButtonClicked = () => {
    navigate(-1);
  };


  if (!inventoryDetails) return <div>Loading...</div>;
  const instock = inventoryDetails.status === "In Stock";
  return (
    <>
      <section className="inventory-whsheader">
        <div className="inventory-whsheader__container">
          <div className="inventory-whsheader__arrow-back"  onClick={handleBackButtonClicked}>
            <img
              src={arrowIcon}
              alt="Go back"
              className="inventory-whsheader__buttonicon"
            />
          </div>
          <div className="inventory-whsheader__title">
            {inventoryDetails.item_name}
          </div>
        </div>
        <NavLink to={`/inventory/editInventory/${id}`} className="inventory-whsheader__arrow-back">
        <button className="inventory-whsheader__edit-button-one">
          <img src={editpen} alt="Edit" className="inventory-whsheader__penicon" />
        </button>

        <button className="inventory-whsheader__edit-button">
          <img src={editpen} alt="Edit" className="inventory-whsheader__penicon" />
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