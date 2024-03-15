import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu";
import InventoryHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/InventoryHouseListSubMenu";
import "./WareHouseDetailsPage";
function WareHouseDetailsPage() {
  const button = "Edit";
  const link = "/editInventory";
  //Retrieve one warehouse data and the related items

  const [warehouse, setWarehouse] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);
  const { id } = useParams(); //This basically collect the id that comes from the Link when we click the specific warehouse
  console.log(id);
  useEffect(() => {
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
    displayOneWarehouseAndRelatedItems();
  }, []); //it will be used on first page render

  //We can use warehouse here now to extract the data (like name, street, etc) of that particular warehouse
  //We can use relatedItems to display the list(map) of all the related items for that warehouse
  const listRelatedInventories = relatedItems.map((relatedItem) => (
    <div className="ware-house-list-selection" key={relatedItem.id}>
      <div className="ware-house-list-selection__container">
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">INVENTORY ITEM</h4>
          <NavLink
            className="ware-house-list-selection__link"
            to="/wareHouseDetails"
          >
            <button className="ware-house-list-selection__button">
              {relatedItem.item_name}
            </button>
            <button className="ware-house-list-selection__icon">.</button>
          </NavLink>
        </div>
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">CATEGORY</h4>
          <p className="ware-house-list-selection__info ware-house-list-selection__info--address">
            {relatedItem.category}
          </p>
        </div>
      </div>
      <div className="ware-house-list-selection__container">
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">STATUS</h4>
          <p className="ware-house-list-selection__info ware-house-list-selection__info--name">
            {relatedItem.status}
          </p>
        </div>
        <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
          <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">
            QTY
          </h4>
          <p className="ware-house-list-selection__info">
            {relatedItem.quantity}
          </p>
        </div>
      </div>
      <div className="ware-house-list-selection__action">
        <button className="ware-house-list-selection__delete">d</button>
        <NavLink
          className="ware-house-list-selection__link"
          to="/editWareHouse"
        >
          <button className="ware-house-list-selection__edit">e</button>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <>
      <WareHouseListMenu
        title={warehouse.warehouse_name}
        button={button}
        link={link}
      />
      <div className="warehouseDetails">
        <div className="warehouseDetails__address">
          <p> WAREHOUSE ADDRESS: </p>
          <p> {warehouse.address} </p>
          <p>
            {" "}
            {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="warehouseDetails__contactName">
          <p> CONTACT NAME: </p>
          <p> {warehouse.contact_name} </p>
          <p> {warehouse.contact_position}</p>
        </div>
        <div className="warehouseDetails__contactInformation">
          <p> CONTACT INFORMATION: </p>
          <p> {warehouse.contact_phone} </p>
          <p> {warehouse.contact_email}</p>
        </div>
      </div>
      <InventoryHouseListSubMenu
        a={"INVENTORY ITEM"}
        b={"CATEGORY"}
        c={"STATUS"}
        d={"QTY"}
        e={"WAREHOUSE"}
        f={"ACTIONS"}
      />
      {listRelatedInventories}
      {/* <div>warehouse Details  2</div> */}
    </>
  );
}
export default WareHouseDetailsPage;
