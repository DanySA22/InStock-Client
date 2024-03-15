import axios from "axios"
import { NavLink, Link } from "react-router-dom"
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
    <Link key={inventory.id} to={`/inventory/${inventory.id}`} className="link">
      <div className="inventory-list-selection" key={inventory.id}>
        <div className="inventory-list-selection__container">
          <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--item">
            <h4 className="inventory-list-selection__title">INVENTORY ITEM</h4>
              <button className="inventory-list-selection__button">{inventory.item_name}</button>
              <button className="inventory-list-selection__icon">.</button>
          </div>
          <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--category">
            <h4 className="inventory-list-selection__title inventory-list-selection__title--category">CATEGORY</h4>
            <p className="inventory-list-selection__info inventory-list-selection__info--category">{inventory.category}</p>
          </div>
          <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--status">
            <h4 className="inventory-list-selection__title">STATUS</h4>
            <p className="inventory-list-selection__info inventory-list-selection__info--status">{inventory.status}</p>
          </div>
        </div>
        <div className="inventory-list-selection__container inventory-list-selection__container--qty">
          <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--qty">
            <h4 className="inventory-list-selection__title inventory-list-selection__info--qty">QTY</h4>
            <p className="inventory-list-selection__info inventory-list-selection__info--qty">{inventory.quantity}</p>
          </div>
          <div className="inventory-list-selection__subcontainer inventory-list-selection__subcontainer--warehouse">
            <h4 className="inventory-list-selection__title inventory-list-selection__info--warehouse">WAREHOUSE</h4>
            <p className="inventory-list-selection__info inventory-list-selection__info--warehouse">{warehouseID(inventory.warehouse_id)}</p>
          </div>
          <div className="inventory-list-selection__action">
          <button className="inventory-list-selection__delete">d</button>
            <button className="inventory-list-selection__edit">e</button>
        </div>
        </div>
      </div>
    </Link>
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
