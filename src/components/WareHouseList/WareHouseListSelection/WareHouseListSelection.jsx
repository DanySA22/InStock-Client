import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DeleteWareHousePopup from "../DeleteWareHouse/DeleteWareHouse";
import { useParams } from "react-router-dom";

function WareHouseListSelection() {
  //useState is initialized with false to indicate pop up is closed.
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  // toggle function toggeles the isPopupOpen State
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const navigate = useNavigate();
  
  const editButtonClick = (event) => {
    event.preventDefault();
    navigate("/editWareHouse");
  };

  const detailsButtonClick = (event) => {
    event.preventDefault();
    navigate(`/wareHouseDetails/${params.id}`);
  };

  //axios get the warehouse list. UseEffect to update every time page get render

  useEffect(() => {
    const warehousesList = async () => {
      const warehousesAll = await axios.get("http://localhost:8080/warehouses");
      // console.log(warehousesAll.data)
      setWarehouses(warehousesAll.data);
    };
    warehousesList();
  }, []);

  const [selectedWareHouse, setSelectedWareHouse] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log("params useEffect ran");

    const getSelectedWareHouse = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${id}`
        );
        setSelectedWareHouse(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };
    
    if (params.id) {
      getSelectedWareHouse(params.id);
      console.log("warehouse id: ",params.id);
    }
  }, [params]);

  const handleDelete = async () => {
    try {
      navigate("/")
      await axios.delete(`http://localhost:8080/warehouses/${selectedWareHouse.id}`);
      console.log('Warehouse deleted successfully');
      // Optionally update your state or UI after successful deletion
    } catch (error) {
      console.error('Error deleting warehouse:', error);
    }
  };



  //console.log(warehouses)
  //use map function to have that list on
  const listWarehouseBlockA = warehouses.map((warehouse) => (
    <Link key={warehouse.id} to={`/warehouse/${warehouse.id}`} className="link">
      <div className="ware-house-list-selection">
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">WAREHOUSE</h4>
            <button
              className="ware-house-list-selection__button"
              onClick={detailsButtonClick}
            >
              {warehouse.warehouse_name}
            </button>
            <button className="ware-house-list-selection__icon">.</button>
          </div>
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">ADDRESS</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--address">
              {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
          </div>
        </div>
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">CONTACT NAME</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--name">
              {warehouse.contact_name}
            </p>
          </div>
          <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
            <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">
              CONTACT INFORMATION
            </h4>
            <p className="ware-house-list-selection__info">
              {warehouse.contact_phone} <br />
              <br /> {warehouse.contact_email}
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
          <button
            className="ware-house-list-selection__edit"
            onClick={editButtonClick}
          >
            e
          </button>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      {listWarehouseBlockA}

      <DeleteWareHousePopup isOpen={isPopupOpen} onClose={togglePopup}>
        <div className="ware-house-list-selection__popup">
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
              <button className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--delete" onClick={handleDelete}>
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
