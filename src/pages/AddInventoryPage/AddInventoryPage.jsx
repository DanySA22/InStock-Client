const AddInventoryPage = () => {
  return (
    <div className="Inventory">
      <form action="" className="Inventory__container">
        <div className="Inventory__details">
          <div className="Inventory__divideone"></div>
          <div className="Inventory__left">
            <h2 className="Inventory__title">Item Details</h2>
            <div className="Inventory__items">
              <label className="Inventory__labels" htmlFor="name">
                Item Name
              </label>
              <input className="Inventory__inputs" type="text" id="name" name="name" placeholder="Inventory Name" />

              <label className="Inventory__labels" htmlFor="description">
                Description
              </label>
              <textarea className="Inventory__textarea" type="text" id="description" name="description" placeholder="Please enter a brief item description..." />

              <label className="Inventory__labels" htmlFor="category">
                Category
              </label>
              <input className="Inventory__inputs" type="text" id="category" name="category" placeholder="Please select" />
            </div>
          </div>
          <div className="Inventory__dividetwo"></div>
          <div className="Inventory__right">
            <h2 className="Inventory__title">Contact Details</h2>
            <div className="Inventory__items"></div>
          </div>
        </div>
        <div className="Inventory__buttons">
          <button className="Inventory__buttons-cancel" type="submit">
            Cancel
          </button>
          <button className="Inventory__buttons-add" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddInventoryPage
