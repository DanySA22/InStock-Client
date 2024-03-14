function EditWareHousePage() {


  return (
    
    <form className="edit-warehouse">
      <div className="edit-warehouse__container">
      <div className="edit-warehouse__divideone"></div>
        <div className="edit-warehouse__section edit-warehouse__section--warehouse-details">
        <div className="edit-warehouse__header">Warehouse Details</div>
          <label htmlFor="warehouse_name" className="edit-warehouse__labeltwo">
            Warehouse Name
          </label>
          <input
            id="warehouse_name"
            name="warehouse_name"
            type="text"
            placeholder="Washington"
            defaultValue="Washington"
            className="edit-warehouse__input"
          />

          <label htmlFor="address" className="edit-warehouse__labeltwo">
            Street Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="33 Pearl Street SW"
            defaultValue="33 Pearl Street SW"
            className="edit-warehouse__input"
          />

          <label htmlFor="city" className="edit-warehouse__labeltwo">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Washington"
            defaultValue="Washington"
            className="edit-warehouse__input"
          />

          <label htmlFor="country" className="edit-warehouse__labeltwo">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="USA"
            defaultValue="USA"
            className="edit-warehouse__input"
          />
        </div>

        <div className="edit-warehouse__divide"></div>

        <div className="edit-warehouse__section edit-warehouse__section--contact-details">
          <div className="edit-warehouse__header-contact ">Contact Details</div>
          <label htmlFor="contact_name" className="edit-warehouse__labeltwo">
            Contact Name
          </label>
          <input
            id="contact_name"
            name="conact_name"
            type="text"
            placeholder="Graeme Lyon"
            defaultValue="Graeme Lyon"
            className="edit-warehouse__input"
          />

          <label htmlFor="contact_position" className="edit-warehouse__labeltwo">
            Position
          </label>
          <input
            id="contact_position"
            name="contact_position"
            type="text"
            placeholder="Warehouse Manager"
            defaultValue="Warehouse Manager"
            className="edit-warehouse__input"
          />

          <label htmlFor="contact_phone:" className="edit-warehouse__labeltwo">
            Phone Number
          </label>
          <input
            id="contact_phone:"
            name="contact_phone:"
            type="text"
            placeholder="+1 (647) 504-0911"
            defaultValue="+1 (647) 504-0911"
            className="edit-warehouse__input"
          />

          <label htmlFor="contact_email" className="edit-warehouse__labeltwo">
            Email
          </label>
          <input
            id="contact_email"
            name="contact_email"
            type="text"
            placeholder="glyon@instock.com"
            defaultValue="glyon@instock.com"
            className="edit-warehouse__input"
          />
        </div>
      </div>
      
      <div className="edit-warehouse__two-buttons">
            <button type="submit" className="edit-warehouse__buttonone">
              Cancel
            </button>
          <button type="submit" className="edit-warehouse__button">
            Save
          </button>
        </div>
    </form>
  );
}
export default EditWareHousePage;
