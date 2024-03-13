function AddWareHousePage() {
  return (
    <div className="warehouse">
      <form action="" className="warehouse__container">
        <div className="warehouse__details">
          <div className="warehouse__divideone"></div>
          <div className="warehouse__left">
            <h2 className="warehouse__title">Warehouse Details</h2>
            <div className="warehouse__items">
              <label className="warehouse__labels" htmlFor="name">
                Warehouse Name
              </label>
              <input className="warehouse__inputs" type="text" id="name" name="name" placeholder="Warehouse Name" />

              <label className="warehouse__labels" htmlFor="address">
                Stress Address
              </label>
              <input className="warehouse__inputs" type="text" id="address" name="address" placeholder="Street Address" />

              <label className="warehouse__labels" htmlFor="city">
                City
              </label>
              <input className="warehouse__inputs" type="text" id="city" name="city" placeholder="City" />

              <label className="warehouse__labels" htmlFor="country">
                Country
              </label>
              <input className="warehouse__inputs" type="text" id="country" name="country" placeholder="Country" />
            </div>
          </div>
          <div className="warehouse__dividetwo"></div>
          <div className="warehouse__right">
            <h2 className="warehouse__title">Contact Details</h2>
            <div className="warehouse__items">
              <label className="warehouse__labels" htmlFor="contactname">
                Contact Name
              </label>
              <input className="warehouse__inputs" type="text" id="contactname" name="contactname" placeholder="Contact Name" />

              <label className="warehouse__labels" htmlFor="position">
                Position
              </label>
              <input className="warehouse__inputs" type="text" id="position" name="position" placeholder="Position" />

              <label className="warehouse__labels" htmlFor="phone">
                Phone
              </label>
              <input className="warehouse__inputs" type="text" id="phone" name="phone" placeholder="Phone Number" />

              <label className="warehouse__labels" htmlFor="email">
                Email
              </label>
              <input className="warehouse__inputs" type="text" id="email" name="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="warehouse__buttons">
          <button className="warehouse__buttons-cancel" type="submit">
            Cancel
          </button>
          <button className="warehouse__buttons-add" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddWareHousePage
