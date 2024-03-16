import axios from "axios"
import { useNavigate, NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react"
import DeleteWareHousePopup from "../DeleteWareHouse/DeleteWareHouse"

function WareHouseListSelection() {
  //useState is initialized with false to indicate pop up is closed.
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [warehouses, setWarehouses] = useState([])
  const [selectedWareHouse, setSelectedWareHouse] = useState({})
  const navigate = useNavigate()
  // toggle function toggeles the isPopupOpen State
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen)
  }
  const handleDeleteButtonClicked = async warehouse => {
    console.log("delete button clicked")
    setSelectedWareHouse(warehouse)
    togglePopup()
  }
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/warehouses/${selectedWareHouse.id}`)
      console.log("Warehouse deleted successfully")
      navigate("/")
      // Optionally update your state or UI after successful deletion
    } catch (error) {
      console.error("Error deleting warehouse:", error)
    }
  }

  //axios get the warehouse list. UseEffect to update every time page get render

  useEffect(() => {
    const warehousesList = async () => {
      const warehousesAll = await axios.get("http://localhost:8080/warehouses")
      // console.log(warehousesAll.data)
      setWarehouses(warehousesAll.data)
    }
    warehousesList()
  }, [])

  //console.log(warehouses)
  //use map function to have that list on
  const listWarehouseBlockA = warehouses.map(warehouse => (
    <div className="ware-house-list-selection" key={warehouse.id}>
      <div className="ware-house-list-selection__container">
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">WAREHOUSE</h4>
          <NavLink to={`/wareHouseDetails/${warehouse.id}`}>
            <button className="ware-house-list-selection__button">{warehouse.warehouse_name}</button>
            <button className="ware-house-list-selection__icon">.</button>
          </NavLink>
        </div>
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">ADDRESS</h4>
          <p className="ware-house-list-selection__info ware-house-list-selection__info--address">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
      </div>
      <div className="ware-house-list-selection__container ware-house-list-selection__container--contact">
        <div className="ware-house-list-selection__subcontainer">
          <h4 className="ware-house-list-selection__title">CONTACT NAME</h4>
          <p className="ware-house-list-selection__info ware-house-list-selection__info--name">{warehouse.contact_name}</p>
        </div>
        <div className="ware-house-list-selection__subcontainer ware-house-list-selection__subcontainer--info">
          <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">CONTACT INFORMATION</h4>
          <p className="ware-house-list-selection__info">
            {warehouse.contact_phone} <br />
            <br /> {warehouse.contact_email}
          </p>
        </div>
      </div>
      <div className="ware-house-list-selection__action">
        <button className="ware-house-list-selection__delete" onClick={() => handleDeleteButtonClicked(warehouse)}>
          d
        </button>
        <NavLink to={`/editWareHouse/${warehouse.id}`}>
          <button className="ware-house-list-selection__edit">e</button>
        </NavLink>
      </div>
    </div>
  ))

  return (
    <>
      {listWarehouseBlockA}

      <DeleteWareHousePopup isOpen={isPopupOpen} onClose={togglePopup}>
        <div className="ware-house-list-selection__popup">
          <h1 className="ware-house-list-selection__header">Delete {selectedWareHouse.warehouse_name} warehouse?</h1>
          <p className="ware-house-list-selection__text"> Please confirm that you'd like to delete the {selectedWareHouse.warehouse_name} warehouse from the list of warehouses. you won't be able to undo this action</p>
          <div className="ware-house-list-selection__box">
            <button className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--cancel" onClick={togglePopup}>
              cancel
            </button>
            <button className="ware-house-list-selection__button-2 ware-house-list-selection__button-2--delete" onClick={handleDelete}>
              delete
            </button>
          </div>
        </div>
      </DeleteWareHousePopup>
    </>
  )
}

export default WareHouseListSelection
