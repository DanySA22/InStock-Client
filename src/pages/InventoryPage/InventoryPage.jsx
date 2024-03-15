import axios from "axios"
import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react"
import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu"
//import WareHouseListSelection from "../../components/WareHouseList/WareHouseListSelection/WareHouseListSelection";
import InventoryHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/InventoryHouseListSubMenu"
//import DeleteWareHousePopup from "../../components/WareHouseList/DeleteWareHouse/DeleteWareHouse";

function InventoryPage() {
  const title = "Inventory"
  const button = "Add New Item"
  const link = "/addInventory"
  const [inventories, setInventories] = useState([])
  //axios get the warehouse list. UseEffect to update every time page get render
  useEffect(() => {
    const warehousesList = async () => {
      const inventoriesAll = await axios.get("http://localhost:8080/items")
      console.log(inventoriesAll.data)
      setInventories(inventoriesAll.data)
    }
    warehousesList()
  }, [])

  function warehouseID(number) {
    if (number === 1) {
      return "Manhatten"
    } else if (number === 2) {
      return "King West"
    } else if (number === 3) {
      return " Granville"
    } else if (number === 4) {
      return "San Fran"
    } else if (number === 5) {
      return "Santa Monica"
    } else if (number === 6) {
      return " Seattle"
    } else if (number === 7) {
      return "Montreal"
    } else {
      return "Boston"
    }
  }

  //use map function to have that list on
  const listInventories = inventories.map(inventory => (
    <>
      <div className="ware-house-list-selection" key={inventory.id}>
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">INVENTORY ITEM</h4>
            <NavLink className="ware-house-list-selection__link" to="/wareHouseDetails">
              <button className="ware-house-list-selection__button">{inventory.item_name}</button>
              <button className="ware-house-list-selection__icon">.</button>
            </NavLink>
          </div>
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">CATEGORY</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--address">{inventory.category}</p>
          </div>
        </div>
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">STATUS</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--name">{inventory.status}</p>
          </div>
          <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
            <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">QTY</h4>
            <p className="ware-house-list-selection__info">{inventory.quantity}</p>
          </div>
          <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
            <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">WAREHOUSE</h4>
            <p className="ware-house-list-selection__info">{warehouseID(inventory.warehouse_id)}</p>
          </div>
        </div>
        <div className="ware-house-list-selection__action">
          <button className="ware-house-list-selection__delete">d</button>
          <NavLink className="ware-house-list-selection__link" to="/editWareHouse">
            <button className="ware-house-list-selection__edit">e</button>
          </NavLink>
        </div>
      </div>
    </>
  ))

  return (
    <div className="warehousepage">
      <WareHouseListMenu title={title} button={button} link={link} />
      <InventoryHouseListSubMenu a={"INVENTORY ITEM"} b={"CATEGORY"} c={"STATUS"} d={"QTY"} e={"WAREHOUSE"} f={"ACTION"} />
      {listInventories}
    </div>
  )
}

export default InventoryPage
