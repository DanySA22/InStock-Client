import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect, } from "react";
import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu";
import InventoryHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/InventoryHouseListSubMenu";
import DeleteWareHousePopup from "../../components/WareHouseList/DeleteWareHouse/DeleteWareHouse";
import StockStatus from "../../components/InventoryList/InventoryListSelection/StockStatus";
import { useParams } from "react-router-dom";
function InventoryPage() {
  const title = "Inventory";
  const button = "Add New Item";
  const link = "/addInventory";
  const [inventories, setInventories] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
const {id} = useParams();
  //axios get the warehouse list. UseEffect to update every time page get render

  // toggle function toggeles the isPopupOpen State
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const handleDeleteButtonClicked = async (inventory) => {
    console.log("delete button clicked");
    setSelectedItem(inventory);
    togglePopup();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/items/${selectedItem.id}`);
      console.log("inventory deleted successfully");
      togglePopup();
      warehousesList();
      // Optionally update your state or UI after successful deletion
    } catch (error) {
      console.error("Error deleting warehouse:", error);
    }
  };
  const warehousesList = async () => {
    const inventoriesAll = await axios.get("http://localhost:8080/items");
    console.log(inventoriesAll.data);
    setInventories(inventoriesAll.data);
  };

  useEffect(() => {
    warehousesList();
  }, []);

  function warehouseID(number) {
    if (number === 1) {
      return "Manhatten";
    } else if (number === 2) {
      return "King West";
    } else if (number === 3) {
      return " Granville";
    } else if (number === 4) {
      return "San Fran";
    } else if (number === 5) {
      return "Santa Monica";
    } else if (number === 6) {
      return " Seattle";
    } else if (number === 7) {
      return "Montreal";
    } else {
      return "Boston";
    }
  }

  //use map function to have that list on
  const listInventories = inventories.map((inventory) => {
  const instock = inventory.status === 'In Stock';
    return(
    <div className="inventory-list-selection" key={inventory.id}>
      <div className="inventory-list-selection__container">
        <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--item">
          <h4 className="inventory-list-selection__title">INVENTORY ITEM</h4>
          {/* <NavLink to={`/itemDetails/${inventory.id}`}> */}
          <NavLink to={`/inventory/inventorydetails/${id}`}>
            <button className="inventory-list-selection__button">
              {inventory.item_name}
            </button>
            <button className="inventory-list-selection__icon">.</button>
          </NavLink>
        </div>
        <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--category">
          <h4 className="inventory-list-selection__title inventory-list-selection__title--category">
            CATEGORY
          </h4>
          <p className="inventory-list-selection__info inventory-list-selection__info--category">
            {inventory.category}
          </p>
        </div>
        <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--status">
          <h4 className="inventory-list-selection__title">STATUS</h4>
          <StockStatus
            instock={instock}
            className="inventory-list-selection__info inventory-list-selection__info--status"
          >
            {inventory.status}
          </StockStatus>
        </div>
      </div>
      <div className="inventory-list-selection__container inventory-list-selection__container--qty">
        <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--qty">
          <h4 className="inventory-list-selection__title inventory-list-selection__info--qty">
            QTY
          </h4>
          <p className="inventory-list-selection__info inventory-list-selection__info--qty">
            {inventory.quantity}
          </p>
        </div>
        <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--warehouse">
          <h4 className="inventory-list-selection__title inventory-list-selection__info--warehouse">
            WAREHOUSE
          </h4>
          <p className="inventory-list-selection__info inventory-list-selection__info--warehouse">
            {warehouseID(inventory.warehouse_id)}
          </p>
        </div>
        <div className="inventory-list-selection__action">
          <button
            className="inventory-list-selection__delete"
            onClick={() => handleDeleteButtonClicked(inventory)}
          >
            d
          </button>
          <NavLink exact to={`editInventory/${inventory.id}`}>
            <button className="inventory-list-selection__edit">e</button>
          </NavLink>
        </div>
      </div>
    </div>
  )});

  return (
    <div className="warehousepage">
      <WareHouseListMenu title={title} button={button} link={link} />
      <InventoryHouseListSubMenu
        a={"INVENTORY ITEM"}
        b={"CATEGORY"}
        c={"STATUS"}
        d={"QTY"}
        e={"WAREHOUSE"}
        f={"ACTION"}
      />
      {listInventories}
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

export default InventoryPage;
