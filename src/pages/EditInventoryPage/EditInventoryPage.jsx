import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import EditWareHouseHeader from "../../components/WareHouseList/EditWareHouseHeader/EditWareHouseHeader"
import { useParams } from "react-router-dom"
const EditInventoryPage = () => {
  const navigate = useNavigate()
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("")
  const [quantity, setQuantity] = useState("")
  const [warehouseName, setWarehouseName] = useState("")
  const [warehouses, setWarehouses] = useState([]);

  const [itemNameError, setItemNameError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [quantityError, setQuantityError] = useState(false)
  const [statusError, setStatusError] = useState(false)

  const warehousesList = async () => {
    const inventoriesAll = await axios.get("http://localhost:8080/warehouses");
    console.log(inventoriesAll.data);
    setWarehouses(inventoriesAll.data);
  };

  useEffect(() => {
    warehousesList();
  }, []);
 

  const params = useParams()
  useEffect(() => {
    const getSelectedItem = async id => {
      try {
        const response = await axios.get(`http://localhost:8080/items/${id}`)
        const { data } = response
        setItemName(data.item_name)
        setDescription(data.description)
        setCategory(data.category)
        setStatus(data.status)
        setQuantity(data.quantity)
        setWarehouseName(data.warehouse_id)
        // Automatically set status to "Out of Stock" if quantity is 0
        setStatus(data.quantity === 0 ? "Out of Stock" : data.status)
      } catch (error) {
        console.error("Error fetching warehouse data:", error)
      }
    }
    if (params.id) {
      getSelectedItem(params.id)
    }
  }, [params])

  const validateInputs = () => {
    let isValid = true
    if (!itemName.trim()) {
      setItemNameError(true)
      isValid = false
    }
    if (!description.trim()) {
      setDescriptionError(true)
      isValid = false
    }
    if (!status) {
      setStatusError(true)
      isValid = false
    }
    if (!quantity || isNaN(quantity)) {
      setQuantityError(true)
      isValid = false
    }
    return isValid
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if (!validateInputs()) {
      return
    }
    const body = {
      warehouse_id: parseInt(warehouseName),
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quantity: parseInt(quantity)
    }
    console.log(body)
    try {
      await axios.put(`http://localhost:8080/items/${params.id}`, body)
      setWarehouseName("")
      setItemName("")
      setDescription("")
      setCategory("")
      setStatus("")
      setQuantity("")
      console.log(setStatus, setQuantity, "Status Quantity")
      //navigate to the inventory page
      navigate("/inventory")
    } catch (e) {
      console.log("Error submitting the form:", e)
    }
  }

  const handleInputChange = (setter, setError) => e => {
    setter(e.target.value)
    setError(false)
  }
  const handleInputChangeSel = setter => e => {
    setter(e.target.value)
  }
  const handleCancel = e => {
    e.preventDefault()
    navigate("/inventory")
  }

  return (
    <>
<EditWareHouseHeader title="Edit Inventory Item" link="/inventory" />
      <div className="Inventory">
        <form onSubmit={handleSubmit} className="Inventory__container">
          <div className="Inventory__details">
            <div className="Inventory__divideone"></div>
            <div className="Inventory__left">
              <h2 className="Inventory__title">Item Details</h2>
              <div className="Inventory__items">
                <label className="Inventory__labels" htmlFor="itemName">
                  Item Name
                </label>
                <input onChange={handleInputChange(setItemName, setItemNameError)} className={`Inventory__inputs ${itemNameError ? "error" : ""}`} type="text" id="itemName" name="itemName" value={itemName} placeholder="Inventory Name" />
                {itemNameError && <p className="error-message">ItemName is required</p>}
                <label className="Inventory__labels" htmlFor="description">
                  Description
                </label>
                <textarea onChange={handleInputChange(setDescription, setDescriptionError)} className={`Inventory__inputs ${descriptionError ? "error" : ""}`} type="text" id="description" value={description} name="description" placeholder="Please enter a brief item description..." />
                {descriptionError && <p className="error-message">Description is required</p>}
                <label className="Inventory__labels" htmlFor="category">
                  Category
                </label>
                <select onChange={handleInputChangeSel(setCategory)} className="Inventory__inputs Inventory__dropdown" type="text" placeholder="Please Select" name="category" required value={category}>
                  <option type="text" value="">
                    Please Select
                  </option>
                  <option type="text" value="Electronics">
                    Electronics
                  </option>
                  <option type="text" value="Gear">
                    Gear
                  </option>
                  <option type="text" value="Apparel">
                    Apparel
                  </option>
                  <option type="text" value="Accessories">
                    Accessories
                  </option>
                  <option type="text" value="Health">
                    Health
                  </option>
                </select>
              </div>
            </div>
            <div className="Inventory__dividetwo"></div>
            <div className="Inventory__right">
              <h2 className="Inventory__title">Item Availability</h2>
              <div className="Inventory__items">
                <label className="Inventory__labels" htmlFor="status">
                  Status
                </label>
                <div className="Inventory__items-status">
                  <div className="Inventory__items-status-one">
                    <input onChange={handleInputChange(setStatus, setStatusError)} className="Inventory__inputs" type="radio" name="status" value="In Stock" checked={status === "In Stock"} />
                    <label htmlFor="status">In Stock</label>
                  </div>
                  <div className="Inventory__items-status-two">
                    <input onChange={handleInputChange(setStatus, setStatusError)} className="Inventory__inputs" type="radio" name="status" value="Out of Stock" checked={status === "Out of Stock"} />
                    <label htmlFor="status">Out of Stock</label>
                  </div>
                </div>
                {statusError && <p className="error-message">Status is required</p>}
                <label className="Inventory__labels" htmlFor="quantity">
                  Quantity
                </label>
                <input onChange={handleInputChange(setQuantity, setQuantityError)} className={`Inventory__inputs ${quantityError ? "error" : ""}`} type="number" id="quantity" name="quantity" value={quantity} placeholder="0" />
                {quantityError && <p className="error-message">Quantity is required</p>}
                <label className="Inventory__labels" htmlFor="warehouseName">
                  Warehouse
                </label>
                <select onChange={handleInputChangeSel(setWarehouseName)} className="Inventory__inputs Inventory__dropdown" type="text" name="warehouseName" required value={warehouseName}>
                  <option type="text" value="">
                    Please Select
                  </option>
                  {warehouses.map((warehouse) => (
                           <option key = {warehouse.id} value = {warehouse.id}>
                              {warehouse.warehouse_name}
                           </option>
                  ))}
                 
                </select>
              </div>
            </div>
          </div>
          <div className="Inventory__buttons">
            <button onClick={handleCancel} className="Inventory__buttons-cancel" type="submit">
              Cancel
            </button>
            <button className="Inventory__buttons-add" type="submit">
              + Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default EditInventoryPage